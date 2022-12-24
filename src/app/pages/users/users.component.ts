import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];
  constructor(private router: Router, private usersServices: UsersService) {}

  ngOnInit(): void {
    this.usersServices.fetchAll().subscribe(
      (res) => {
        this.users = res.data;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  onNewUser() {
    this.router.navigateByUrl('users/new');
  }

  onViewUser(id: number | undefined) {
    this.router.navigateByUrl(`users/${id}`);
  }
}
