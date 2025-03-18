import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Logout', component: LogoutComponent },
    { path: 'Home', component: HomeComponent },
    { path: '', redirectTo: 'Login', pathMatch: 'full' }
];
