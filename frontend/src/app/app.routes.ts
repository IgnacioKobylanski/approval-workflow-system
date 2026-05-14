import { Routes } from '@angular/router';
import { RequestListComponent } from './components/request-list/request-list';
import { LoginComponent } from './components/auth/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'requests',
    component: RequestListComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];