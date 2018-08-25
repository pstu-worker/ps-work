import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../config/routerConfig';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from '../services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
