import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-header',
  imports: [MenuComponent, MatToolbarModule, MatIconModule, ProfileComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.isLoggedIn = this.userService.getUsername();
  }
}
