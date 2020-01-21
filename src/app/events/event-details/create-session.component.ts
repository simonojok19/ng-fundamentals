import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  templateUrl: './create-session.component.html'
})
export class CreateSessionComponent implements OnInit{
    name: FormControl;
  private presenter: FormControl;
  private duration: FormControl;
  private abstract: FormControl;
  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.abstract = new FormControl('', Validators.required);
  }

}
