import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
 templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  private firstName: FormControl;
  private lastName: FormControl;
  private profileForm: FormGroup;
  ngOnInit(): void {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

}
