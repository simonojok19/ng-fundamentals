import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession;
  @Input() filterBy: string;
  visibleSessions: ISession;

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSession(this.filterBy);
    }
  }

  private filterSession(filter: string) {
    if (filter === 'all') {

    } else {

    }
  }
}
