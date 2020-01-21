import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
 templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  private firstName: FormControl;
  private lastName: FormControl;
  ngOnInit(): void {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
  }

}
