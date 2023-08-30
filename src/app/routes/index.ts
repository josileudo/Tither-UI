import { Route } from '@angular/router';

import { RegisterComponent } from '../pages/Register';
import { DashboardPage } from '../pages/Dashboard';

export const routes: Route[] = [
  { path: '', component: DashboardPage },
  { path: 'register-decimate', component: RegisterComponent }
];
