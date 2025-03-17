import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'Logout', component: LogoutComponent },
    { path: 'Home', component: HomeComponent }
];
