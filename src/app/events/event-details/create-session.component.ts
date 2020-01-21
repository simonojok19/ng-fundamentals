import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './create-session.component.html'
})
export class CreateSessionComponent implements OnInit{
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;
    level: FormControl;
  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues: any) {
    console.log(formValues);
  }
}
