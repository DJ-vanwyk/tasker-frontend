import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../types/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService, private router: Router) {
    tasksService.fetchAll().subscribe(
      (res) => {
        this.tasks = res.data;
      },
      (err) => {
        if (err.status) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }
}
