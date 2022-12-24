import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent {
  // Error messages
  usernameError: string = '';
  // User
  userId: number = 0;
  user: User = {
    username: '',
  };
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    // Fetch user
    this.usersService.fetch(this.userId).subscribe(
      (res) => {
        this.user = res.data;
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
    this.router.navigateByUrl('users');
  }

  // Enable edit mode
  onEdit() {
    this.editMode = true;
  }

  // Cancel edit mode
  onCancel() {
    this.editMode = false;
  }

  // Update user
  onSave() {
    // Validate
    if (this.user.username === '') {
      this.usernameError = 'Username is required';
      return;
    } else {
      this.usernameError = '';
    }

    // Update user
    this.usersService.update(this.userId, this.user).subscribe(
      () => {
        this.editMode = false;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }

  // Delete user
  onDelete() {
    this.usersService.delete(this.userId).subscribe(
      () => {
        this.router.navigateByUrl('users');
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigateByUrl('login');
        }
      }
    );
  }
}
