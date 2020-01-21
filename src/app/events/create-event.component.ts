import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-right: 10px; }
    .error input { background-color: #e3c3c5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})
export class CreateEventComponent {
  isDirty = true;
  newEvent;
  constructor(private router: Router ) {
  }
  cancel() {
    this.router.navigate(['/events']).then(r => console.log(r)).catch(e => console.log(e));
  }

  saveEvent(formValues: any) {
    console.log(formValues);
  }
}
