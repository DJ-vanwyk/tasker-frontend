import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { Response } from '../types/response';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private api: ApiService) {}

  fetchAll(): Observable<Response> {
    return this.api.get('/tasks');
  }
}
