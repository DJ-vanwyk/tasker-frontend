import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<User> {
  
    return this.http.post<User>('http://localhost/tasker/api/login', { username: username, password: password });
  }
    
  
}
