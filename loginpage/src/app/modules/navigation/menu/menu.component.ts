import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatButtonModule, MatTooltipModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isLoggedin = true;

  constructor (private authService: AuthService) {
    this.isLoggedin = authService.isAuthenticated();
  }

  showTooltip(event: Event, message: string) {
    if (!this.isLoggedin) {
      const target = event.currentTarget as HTMLElement;
      target.dispatchEvent(new Event('mouseenter'));
    }
  }

}
