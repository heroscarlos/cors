import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CarService } from 'src/app/car.service';
import { ICar } from 'src/app/models/ICar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent {

  dataSource = new CarDataSource(this.carService);
  displayedColumns = ['name', 'year'];

  constructor(private carService: CarService) { }

  ngOnInit() {
  }
}

export class CarDataSource extends DataSource<any> {
  constructor(private carService: CarService) {
    super();
  }
  connect(): Observable<ICar[]> {
    return this.carService.getCars();
  }
  disconnect() { }
}
