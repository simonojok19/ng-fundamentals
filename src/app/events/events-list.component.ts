import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import {TOASTR_TOKEN} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared/event.model';


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
export class EventsListComponent implements OnInit{
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.eventService.getEvents().subscribe( (event: any) => {
      this.events = event;
    });
  }
}

