import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../types/task';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { StatusesService } from 'src/app/services/statuses.service';
import { User } from 'src/app/types/user';
import { Status } from 'src/app/types/status';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = [];
  users: User[] = [];
  statuses: Status[] = [];

  constructor(
    private tasksService: TasksService,
    private usersService: UsersService,
    private statusesService: StatusesService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch all tasks
    this.tasksService.fetchAll().subscribe(
      (res) => {
        this.tasks = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
    // Fetch all users
    this.usersService.fetchAll().subscribe(
      (res) => {
        this.users = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
    // Fetch all statuses
    this.statusesService.fetchAll().subscribe(
      (res) => {
        this.statuses = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  goToNewTask() {
    this.router.navigateByUrl('tasks/new');
  }
}
