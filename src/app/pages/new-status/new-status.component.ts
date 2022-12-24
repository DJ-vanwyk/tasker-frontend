import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusesService } from 'src/app/services/statuses.service';
import { Status } from 'src/app/types/status';

@Component({
  selector: 'app-new-status',
  templateUrl: './new-status.component.html',
  styleUrls: ['./new-status.component.scss'],
})
export class NewStatusComponent {
  // Error messages
  nameError: string = '';
  // New status
  newStatus: Status = {
    name: '',
  };

  constructor(
    private router: Router,
    private statusesService: StatusesService
  ) {}

  onCancel() {
    this.router.navigateByUrl('statuses');
  }

  onCreate() {
    // Reset error messages
    this.nameError = '';
    // Validate
    if (this.newStatus.name === '') {
      this.nameError = 'Name is required';
      return;
    }

    this.statusesService.create(this.newStatus).subscribe(
      (res) => {
        this.router.navigateByUrl('statuses');
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }
}
