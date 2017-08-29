import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/RX";
import { CreateEventComponent } from "./create-event.component";

@Injectable()
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  canDeactivate(component: CreateEventComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // if (component.isDirty)
    //   return window.confirm('You are not saved this event, do you really want to cancel?');
    return false;
  }

  constructor() { }

  

}
