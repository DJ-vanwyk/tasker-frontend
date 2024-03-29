import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private router: Router, private auth: AuthService) {}

  onLogout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('login');
    });
  }
}
