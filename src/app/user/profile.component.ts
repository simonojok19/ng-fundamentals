import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
 templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  public firstName: FormControl;
  public lastName: FormControl;
  public profileForm: FormGroup;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName);
    this.lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

}
