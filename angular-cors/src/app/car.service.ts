import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ICar } from './models/ICar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]> {
   
    const URL = `${this.baseURL}/cars`;
   
    return this.http.get<ICar[]>(URL);

  }

}
