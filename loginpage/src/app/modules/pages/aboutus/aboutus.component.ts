import { Component } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-aboutus',
  imports: [LoginComponent, MatGridListModule, CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  constructor(private userService: UserService) {}
    username: string | null = '';
  
    ngOnInit() {
      if(this.userService.getUsername()) 
        this.userService.user$.subscribe(user => {
          this.username = user;
          console.log(user);
        });
    }
}
