import { TestBed } from '@angular/core/testing';
import { IsSignedInGuard } from './is-signed-in.guard';

describe('IsNotSignedInGuard', () => {
  let guard: IsSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
