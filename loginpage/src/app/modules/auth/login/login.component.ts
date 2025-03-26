import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  //Variables for the loginform
  hidePassword: boolean = true;
  submitted: boolean = false;
  loginfailed:boolean = false;
  errorMessage: string = "";
  passwordMatcher = new CustomErrorStateMatcher();

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

  constructor(private authService: AuthService, private router: Router) { }

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

        if (response.success) {
          this.router.navigate(['home']);
        }
        else {
          this.loginfailed = true;
          this.errorMessage = response.error
        }

      }
      catch (error) {
        this.errorMessage = "Error while Authenticating";
      }

    }

    //Form Validation
    else {
      
    }
  }
}

class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if (!control || !form) return false;

    const emailControl = form.form.get('email');

    return !!(control && control.invalid && (control.dirty || control.touched || form.submitted) && emailControl?.valid);
  }
}
