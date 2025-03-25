import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent },
        ]
    },
    
    { path: '**', component: PageNotFoundComponent}
];

