import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Response } from '../types/response';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private api: ApiService) {}

  fetchAll(): Observable<Response> {
    return this.api.get('/users');
  }

  create(user: User): Observable<Response> {
    return this.api.post('/users', user);
  }
}
