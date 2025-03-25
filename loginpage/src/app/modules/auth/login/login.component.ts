import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../../services/session-storage/session-storage.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  hidePassword = true;
  submitted = false;
  loginfailed = false;
  errorMessage: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private authService: AuthService, private session: SessionStorageService, private router: Router) { }

  async goToHome(event: Event) {
    event.preventDefault();
    this.submitted = true;

    //Form Validation
    if (this.loginForm.valid) {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      //Check if user is authenticated
      try {
        const response = await this.authService.login(userEmail, userPassword);

        if (response) {
          this.router.navigate(['home']);
        }
        else {
          this.loginfailed = true;
        }

      }
      catch (error) {
        this.errorMessage = "Error while Authenticating";
      }

    }

    //Form Validation
    else {
      const emailField = this.loginForm.get('email');
      const passwordField = this.loginForm.get('password');
      if(emailField?.valid) {
        emailField.markAsTouched();
      }
      else if(passwordField?.valid) {
        passwordField.markAsTouched();
      }
    }
  }
}
