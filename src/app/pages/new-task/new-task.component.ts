import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { Status } from 'src/app/types/status';
import { StatusesService } from 'src/app/services/statuses.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Task } from 'src/app/types/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  statuses: Status[] = [];
  users: User[] = [];
  description: string = 'asdsds';

  newTask: Task = {
    description: '',
    status: -1,
    assigned_to: -1,
    due_date: '',
  };

  constructor(
    private statusesService: StatusesService,
    private router: Router,
    private usersService: UsersService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    // Fetches Statuses on load
    this.statusesService.fetchAll().subscribe(
      (resp) => {
        this.statuses = resp.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
    this.usersService.fetchAll().subscribe(
      (resp) => {
        this.users = resp.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  onCancel() {
    this.router.navigateByUrl('tasks');
  }

  onCreate() {
    this.tasksService.create(this.newTask).subscribe((resp) => {
      this.router.navigateByUrl('tasks');
    });
  }
}
