import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Route, Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px}
  `]
})
export class LoginComponent {
  userName;
  password;
  mouseoverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']).then(r => console.log(r)).catch(e => console.log(e));
  }
  cancel() {
    this.router.navigate(['events']).then(r => console.log(r)).catch(e => console.log(e));
  }
}
