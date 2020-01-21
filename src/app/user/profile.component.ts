import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
 templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  public firstName: FormControl;
  public lastName: FormControl;
  public profileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']).then(r => console.log(r)).catch(e => console.log(e));
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.cancel();
    }
  }
}
