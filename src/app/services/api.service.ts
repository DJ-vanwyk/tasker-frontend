import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../types/response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost/tasker/api';

  constructor(private http: HttpClient) {}

  get(url: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + url);
  }

  post(url: string, body: any): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + url, body);
  }

  put(url: string, body: any): Observable<Response> {
    return this.http.put<Response>(this.baseUrl + url, body);
  }

  delete(url: string): Observable<Response> {
    return this.http.delete<Response>(this.baseUrl + url);
  }
}
