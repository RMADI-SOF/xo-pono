import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { IsSignedInGuard } from './is-signed-in.guard';

describe('IsSignedInGuard', () => {
  let guard: IsSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: {} },
        { provide: Router, useValue: {}}
      ]
    });
    guard = TestBed.inject(IsSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
