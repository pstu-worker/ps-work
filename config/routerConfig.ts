
import { Routes } from '@angular/router';
import { SignInComponent } from '../src/app/sign-in/sign-in.component';
import { MainComponent } from '../src/app/main/main.component';

export const AppRoutes: Routes = [
  {
    path: 'sign_in',
    component: SignInComponent
  }, {
    path: 'main',
    component: MainComponent
  }, {
    path: '**',
    redirectTo: 'sign_in',
    pathMatch: 'full',
  }
];
