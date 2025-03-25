import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    { path: '',
        children:[
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ]
    },
    
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
