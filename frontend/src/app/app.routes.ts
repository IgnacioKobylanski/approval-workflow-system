import { Routes } from '@angular/router';
import { RequestListComponent } from './components/request-list/request-list';

export const routes: Routes = [
  {
    path: 'requests',
    component: RequestListComponent, 
  },
  {
    path: '',
    redirectTo: 'requests',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'requests'
  }
];