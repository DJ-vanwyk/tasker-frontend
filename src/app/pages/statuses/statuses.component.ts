import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusesService } from 'src/app/services/statuses.service';
import { Status } from 'src/app/types/status';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss'],
})
export class StatusesComponent {
  statuses: Status[] = [];

  constructor(
    private statusesService: StatusesService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  onNewStatus() {
    this.router.navigateByUrl('statuses/new');
  }

  onViewStatus(id: number) {
    this.router.navigateByUrl(`statuses/${id}`);
  }
}
