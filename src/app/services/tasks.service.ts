import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { Response } from '../types/response';
import { Task } from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private api: ApiService) {}

  fetchAll(): Observable<Response> {
    return this.api.get('/tasks');
  }

  create(task: Task): Observable<Response> {
    return this.api.post('/tasks', task);
  }
}
