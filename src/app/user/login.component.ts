import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  login(formValues: any) {
    console.log(formValues);
  }
}
