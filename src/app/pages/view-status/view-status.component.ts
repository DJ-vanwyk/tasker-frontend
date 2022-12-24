import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusesService } from 'src/app/services/statuses.service';
import { Status } from 'src/app/types/status';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.scss'],
})
export class ViewStatusComponent {
  // Error messages
  nameError: string = '';
  // Status
  statusId: number = 0;
  status: Status = {
    name: '',
  };
  // Edit mode
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private statusesService: StatusesService,
    private router: Router
  ) {
    this.statusId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    // Fetch status
    this.statusesService.fetch(this.statusId).subscribe(
      (res) => {
        this.status = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  // Navigation
  onBack() {
    this.router.navigateByUrl('statuses');
  }

  // Enable edit mode
  onEdit() {
    this.editMode = true;
  }

  // Cancel edit mode
  onCancel() {
    this.editMode = false;
  }

  // Update status
  onSave() {
    // Reset error messages
    this.nameError = '';
    // Validate
    if (this.status.name === '') {
      this.nameError = 'Name is required';
      return;
    }

    this.statusesService.update(this.statusId, this.status).subscribe(
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

  // Delete status
  onDelete() {
    this.statusesService.delete(this.statusId).subscribe(
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
