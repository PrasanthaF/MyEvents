import { Injectable } from '@angular/core';
import { EventService } from "../shared/event.service";

@Injectable()
export class EventsListResolverService {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents().map(events => events)
  }

}
