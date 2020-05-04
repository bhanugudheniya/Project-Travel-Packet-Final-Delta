import { TestBed } from '@angular/core/testing';

import { AdminlogoutService } from './adminlogout.service';

describe('AdminlogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminlogoutService = TestBed.get(AdminlogoutService);
    expect(service).toBeTruthy();
  });
});
