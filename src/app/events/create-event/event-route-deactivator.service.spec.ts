import { TestBed, inject } from '@angular/core/testing';

import { EventRouteDeactivatorService } from './event-route-deactivator.service';

describe('EventRouteDeactivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteDeactivatorService]
    });
  });

  it('should be created', inject([EventRouteDeactivatorService], (service: EventRouteDeactivatorService) => {
    expect(service).toBeTruthy();
  }));
});
