import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { AboutusComponent } from './modules/pages/aboutus/aboutus.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'aboutus', pathMatch: 'full'},
    { path: 'aboutus', component: AboutusComponent },
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

