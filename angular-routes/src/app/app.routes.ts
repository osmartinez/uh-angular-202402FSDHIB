import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostsComponent } from './pages/posts/posts.component';
import { preguntarSalirGuard } from './guards/preguntar-salir.guard';
import { controlEntradaGuard } from './guards/control-entrada.guard';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
    canDeactivate: [],
    canActivate: [],
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
];
