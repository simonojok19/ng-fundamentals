import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
      <div>
          <h1>Upcoming Angular Events</h1>
          <hr>
          <div class="row">
              <div class="col-md-5" *ngFor="let event of events">
                  <app-event-thumbnail [event]="event"></app-event-thumbnail>
              </div>
          </div>
      </div>
  `
})
export class EventsListComponent {

}

