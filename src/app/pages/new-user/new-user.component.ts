import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  // Error messages
  usernameError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  // New user
  newUser: User = {
    username: '',
    password: '',
  };

  confirmPassword: string = '';

  constructor(private router: Router, private usersService: UsersService) {}

  onCancel() {
    this.router.navigateByUrl('users');
  }

  onCreate() {
    // Reset error messages
    this.usernameError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
    // Validate
    if (this.newUser.username === '') {
      this.usernameError = 'Username is required';
    }
    if (this.newUser.password === '') {
      this.passwordError = 'Password is required';
    }
    if (this.confirmPassword === '') {
      this.confirmPasswordError = 'Confirm password is required';
    }

    if (this.newUser.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match';
    }

    console.log('All tests passed');
    if (
      this.usernameError === '' &&
      this.passwordError === '' &&
      this.confirmPasswordError === '' &&
      this.newUser.password === this.confirmPassword
    ) {
      console.log('All tests passed');
      this.usersService.create(this.newUser).subscribe(
        (res) => {
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
}
