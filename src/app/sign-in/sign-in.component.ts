import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserModule } from '../../models/User';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  result: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.result = {};
    const user = UserModule.User.getLocal();
    console.warn(user);
    if (!isNullOrUndefined(user)) {
      console.error(user);
      UserModule.User.saveInfo({ 'type': 'I' }, { 'username': user });
      this.router.navigate([ '/main'], { relativeTo: this.route } );
    }
  }

  private ResetError() {
    this.result = {};
  }

  private SignIn() {
    this.GetData();
  }

  private GetData() {
    this.authService.SignIn(this.registerForm.value)
      .subscribe(res => {
        UserModule.User.saveInfo(res, this.registerForm.value['username']);
        this.SaveResult();
    });
  }

  private SaveResult() {
    this.result = UserModule.User.getMessage();
    if ( !isNullOrUndefined(UserModule.User.getUser()) ) {
      this.router.navigate([ '/main'], { relativeTo: this.route } );
    }
  }
}
