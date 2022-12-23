import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../types/response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost/tasker/api';

  constructor(private http: HttpClient) {}

  get(url: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + url, {
      withCredentials: true,
    });
  }

  post(url: string, body: any): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
    });
  }

  put(url: string, body: any): Observable<Response> {
    return this.http.put<Response>(this.baseUrl + url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
    });
  }

  delete(url: string): Observable<Response> {
    return this.http.delete<Response>(this.baseUrl + url, {
      withCredentials: true,
    });
  }
}
