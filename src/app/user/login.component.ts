import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName;
  password;

  login(formValues: any) {
    console.log(formValues);
  }
}
