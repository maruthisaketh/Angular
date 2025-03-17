import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  onSubmit() {
    console.log('Login data:', this.loginData);
    // You can add authentication logic here (API call)
  }
}
