
import { Routes } from '@angular/router';
import { SignInComponent } from '../src/app/sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: 'sign_in',
    component: SignInComponent
  }, {
    path: '**',
    redirectTo: 'sign_in',
    pathMatch: 'full',
  }
];
