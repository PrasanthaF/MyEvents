import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventRouteDeactivatorService } from "./events/create-event/event-route-deactivator.service";

const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent//, canDeactivate:[EventRouteDeactivatorService]
  },
  {
    path: 'events', component: EventsListComponent, resolve:{events:EventsListResolverService}
  },
  {
    path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]
  },
  {
    path: '404', component: Error404Component
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
  {
    path: 'user', loadChildren: 'app/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
