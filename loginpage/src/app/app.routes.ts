import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Login', pathMatch: 'full'},
    { path: 'Login', component: LoginComponent },
    { path: 'Logout', component: LogoutComponent },
];
