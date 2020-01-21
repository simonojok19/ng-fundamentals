import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared/event.service';

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
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent;
  constructor(private router: Router, private eventService: EventService) {
  }
  cancel() {
    this.router.navigate(['/events']).then(r => console.log(r)).catch(e => console.log(e));
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.cancel();
  }

  ngOnInit(): void {
    this.newEvent = {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: [
        {
          id: 1,
          name: 'Using Angular 4 Pipes',
          presenter: 'Peter Bacon Darwin',
          duration: 1,
          level: 'Intermediate',
          abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: 'Getting the most out of your dev team',
          presenter: 'Jeff Cross',
          duration: 1,
          level: 'Intermediate',
          abstract: `We all know that our dev teams work hard, but with
          the right management they can be even more productive, without
          overworking them. In this session I'll show you how to get the
          best results from the talent you already have on staff.`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: 'Angular 4 Performance Metrics',
          presenter: 'Rob Wormald',
          duration: 2,
          level: 'Advanced',
          abstract: `Angular 4 Performance is hot. In this session, we'll see
          how Angular gets such great performance by preloading data on
          your users devices before they even hit your site using the
          new predictive algorithms and thought reading software
          built into Angular 4.`,
          voters: []
        },
        {
          id: 4,
          name: 'Angular 5 Look Ahead',
          presenter: 'Brad Green',
          duration: 2,
          level: 'Advanced',
          abstract: `Even though Angular 5 is still 6 years away, we all want
          to know all about it so that we can spend endless hours in meetings
          debating if we should use Angular 4 or not. This talk will look at
          Angular 6 even though no code has yet been written for it. We'll
          look at what it might do, and how to convince your manager to
          hold off on any new apps until it's released`,
          voters: []
        },
        {
          id: 5,
          name: 'Basics of Angular 4',
          presenter: 'John Papa',
          duration: 2,
          level: 'Beginner',
          abstract: `It's time to learn the basics of Angular 4. This talk
          will give you everything you need to know about Angular 4 to
          get started with it today and be building UI's for your self
          driving cars and butler-bots in no time.`,
          voters: ['bradgreen', 'igorminar']
        }
      ]
    };
  }
}
