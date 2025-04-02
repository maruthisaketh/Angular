import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, MatMenuModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private userService: UserService) {}
  username: string | null = '';

  ngOnInit() {
    if(this.userService.getUsername()) 
      this.userService.user$.subscribe(user => {
        this.username = user;
        console.log(user);
      });
  }

  logout() {
    this.userService.logout();
  }
}
