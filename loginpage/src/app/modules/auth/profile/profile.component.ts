import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from '../../../services/session-storage/session-storage.service';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, MatMenuModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private session: SessionStorageService, private router: Router) {}
  username: string | null = '';

  ngOnInit() {
    this.username = this.session.getEmail();
  }

  logout() {
    this.session.clearEmail();
    this.session.clearToken();
    this.router.navigate(['/login']);
  }
}
