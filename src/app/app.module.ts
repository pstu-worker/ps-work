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
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainComponent
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
