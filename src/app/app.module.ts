import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventListResolver} from './events/events-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {DurationPipe} from './events/shared/duration.pipe';
import {SimpleModalComponent} from './common/simple-modal.component';
import {JQ_TOKEN} from './common/jquery.service';
import {ModalTriggerDirective} from './common/modal-trigger.directive';
import {UpVoteComponent} from './events/event-details/up-vote.component';
import {VoterService} from './events/event-details/voter.service';
import {LocationValidatorDirective} from './events/location-validator.directive';

declare let toastr: Toastr;
// @ts-ignore
const jquery = window['$'];
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: EventRouteActivator, useClass: EventRouteActivator },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    { provide: AuthService, useClass: AuthService },
    { provide: JQ_TOKEN, useValue: jquery },
    { provide: VoterService, useClass: VoterService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // console.log(jquery);
  }
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
