import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  SignIn(info) {
    const obj = {
      username: info['username'],
      password: info['password']
    };
    return this
      ._http.post('http://localhost:4000/sign_in', obj);
  }

}
