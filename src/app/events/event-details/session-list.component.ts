import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'names' ?
        this.visibleSessions.sort(sortByNameAsc) :
        this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  private filterSession(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter( session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}
