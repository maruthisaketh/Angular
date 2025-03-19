import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, MatMenuModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private router: Router) {}
  LogOut() {
    this.router.navigate(['/Login']);
  }
}
