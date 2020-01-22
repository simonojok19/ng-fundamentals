import { Component } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {Router} from '@angular/router';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px}
    #searchForm { margin-right: 100px }
    @media (max-width: 1200px){
        #searchForm { display: none }
    }
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string;
  foundSessions: ISession[];
  constructor(public authService: AuthService, private eventService: EventService) {
    console.log(authService.isAuthenticated());
  }

  searchSession(searchTerm: any) {
    this.eventService.searchSession(searchTerm).subscribe( sessions => {
      this.foundSessions = sessions;
    });
  }
}
