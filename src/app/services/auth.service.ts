import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../types/User';
import { Response } from '../types/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<Response> {
      return this.http.post<Response>('http://localhost/tasker/api/login', { username: username, password: password });
  }
    
  
}
