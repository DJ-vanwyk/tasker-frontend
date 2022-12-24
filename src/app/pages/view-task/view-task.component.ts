import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusesService } from 'src/app/services/statuses.service';
import { TasksService } from 'src/app/services/tasks.service';
import { UsersService } from 'src/app/services/users.service';
import { Status } from 'src/app/types/status';
import { Task } from 'src/app/types/task';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent {
  taskId: number = 0;
  task: Task = {
    description: '',
    status: 0,
    assigned_to: 0,
    due_date: '',
  };

  // Error messages
  descriptionError: string = '';
  statusError: string = '';
  assignedToError: string = '';
  dueDateError: string = '';

  users: User[] = [];
  statuses: Status[] = [];
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router,
    private usersService: UsersService,
    private statusesService: StatusesService
  ) {
    this.taskId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    // Fetch task
    this.tasksService.fetch(this.taskId).subscribe(
      (res) => {
        this.task = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );

    // Fetch all users
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

    // Fetch all statuses

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
  }

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
  }

  onSave() {
    // Reset errors
    this.descriptionError = '';
    this.statusError = '';

    // Validate
    if (this.task.description === '') {
      this.descriptionError = 'Description is required';
    }

    if (this.task.due_date === '') {
      this.dueDateError = 'Due date is required';
    }

    // Save if no errors
    if (this.task.description !== '' && this.task.due_date !== '') {
      this.tasksService.update(this.taskId, this.task).subscribe(
        (res) => {
          this.editMode = false;
        },
        (err) => {
          if (err.status === 401) {
            this.router.navigateByUrl('login');
          }
        }
      );
    }
  }

  onDelete() {
    this.tasksService.delete(this.taskId).subscribe(
      (res) => {
        this.router.navigateByUrl('tasks');
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  onBack() {
    this.router.navigateByUrl('tasks');
  }
}
