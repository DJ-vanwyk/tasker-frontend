import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../types/response';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(username: string, password: string): Observable<Response> {
    return this.api.post('/login', {
      username: username,
      password: password,
    });
  }

  logout(): Observable<Response> {
    return this.api.post('/logout', {});
  }
}
