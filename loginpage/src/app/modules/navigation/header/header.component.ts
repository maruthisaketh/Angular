import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from '../menu/menu.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, MatToolbarModule, MatIconModule, ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
