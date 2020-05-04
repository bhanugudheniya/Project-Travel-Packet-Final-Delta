import { TestBed } from '@angular/core/testing';

import { TravelPacketService } from './travel-packet.service';

describe('TravelPacketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelPacketService = TestBed.get(TravelPacketService);
    expect(service).toBeTruthy();
  });
});
