import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },

    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent },
        ]
    },
    
    { path: '**', component: PageNotFoundComponent}
];

