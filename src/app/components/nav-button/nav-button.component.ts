import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent {
  @Input() href: string = '';
  @Input() text: string = '';
  @Input() icon = faCoffee;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigateByUrl(this.href);
  }
}
