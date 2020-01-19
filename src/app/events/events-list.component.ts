import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

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
  events: any[];
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}

