import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Response } from '../../types/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string= "";
  password: string= "";

  constructor(private authService: AuthService) { }



  onClick() {
      this.authService.login(this.username, this.password).subscribe((resp: Response) => {
      console.log(resp);}, (error) => {
        console.log(error.error);
      });
  }
}
