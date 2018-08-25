import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { UserModule } from '../../models/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private ResetError() {
    this.submitted = false;
  }

  private SignIn() {
    this.submitted = true;
    this.GetData();
  }

  private GetData() {
    this.authService.SignIn(this.registerForm.value)
      .subscribe(res => {
        UserModule.User.setUser(res);
    });
  }
}
