import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `<div>
      <h1>Upcoming Angular Events</h1>
  </div>`
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    }
  };
}
