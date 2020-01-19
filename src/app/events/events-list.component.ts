import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr;
@Component({
  selector: 'app-events-list',
  template: `
      <div>
          <h1>Upcoming Angular Events</h1>
          <hr>
          <div class="row">
              <div class="col-md-5" *ngFor="let event of events">
                  <app-event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></app-event-thumbnail>
              </div>
          </div>
      </div>
  `
})
export class EventsListComponent implements OnInit{
  events: any[];
  constructor(private eventService: EventService) {
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    toastr.success(eventName);
  }
}

