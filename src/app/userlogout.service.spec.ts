import { TestBed } from '@angular/core/testing';

import { UserlogoutService } from './userlogout.service';

describe('UserlogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserlogoutService = TestBed.get(UserlogoutService);
    expect(service).toBeTruthy();
  });
});
