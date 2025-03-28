import { Component } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-aboutus',
  imports: [LoginComponent, MatGridListModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}
