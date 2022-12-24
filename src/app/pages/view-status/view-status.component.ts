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
  statusId: number = 0;
  status: Status = {
    name: '',
  };
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

  onBack() {
    this.router.navigateByUrl('statuses');
  }

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
  }

  onSave() {
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
