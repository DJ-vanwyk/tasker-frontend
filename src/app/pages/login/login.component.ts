import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordError: string = '';
  usernameError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onClick() {
    // Resets error messages
    this.usernameError = '';
    this.passwordError = '';
    // Checks if username and password are empty
    if (this.username === '') {
      this.usernameError = 'Username is required';
    }

    if (this.password === '') {
      this.passwordError = 'Password is required';
    }
    //Tries to login if username and password are not empty
    if (this.username !== '' && this.password !== '') {
      this.authService.login(this.username, this.password).subscribe(
        // If login is successful, navigate to tasks page
        (resp) => {
          if (resp.code === 200) {
            this.router.navigateByUrl('tasks');
          }
        },
        (error) => {
          // Shows error message if username or password is incorrect
          if (
            error.status === 401 ||
            error.status === 400 ||
            error.status === 404
          ) {
            this.password = '';
            this.passwordError = 'Invalid username or password';
          }
        }
      );
    }
  }
}
