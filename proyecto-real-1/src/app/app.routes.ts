import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateAreaComponent } from './pages/private-area/private-area.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { isNotAuthGuard } from './guards/is-not-auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [isNotAuthGuard]
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "private-area",
        component: PrivateAreaComponent,
        canActivate: [isAuthGuard]
    }
];
