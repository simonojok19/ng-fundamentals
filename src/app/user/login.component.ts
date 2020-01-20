import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Route, Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName;
  password;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
}
