import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { Response } from '../types/response';
import { Status } from '../types/status';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
  constructor(private api: ApiService) {}

  fetchAll(): Observable<Response> {
    return this.api.get('/statuses');
  }

  create(status: Status): Observable<Response> {
    return this.api.post('/statuses', status);
  }
}
