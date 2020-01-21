import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .image-event { height: 100px; }
    a { cursor: pointer }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params.id);
  }

  addSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
  }
}
