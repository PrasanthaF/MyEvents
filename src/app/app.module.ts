import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from "./shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventRouteDeactivatorService } from "./events/create-event/event-route-deactivator.service";
import { UserModule } from "./user/user.module";
import  {} from "./shared/event.model";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from './events/create-session/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule    
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService, EventsListResolverService, AuthService
    // EventRouteDeactivatorService
    // ,
    // {
    //   provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function checkDirtyState(component: CreateEventComponent) {
//   if (component.isDirty)
//     return window.confirm('You are not saved this event, do you really want to cancel?');
//   return false;
// }
