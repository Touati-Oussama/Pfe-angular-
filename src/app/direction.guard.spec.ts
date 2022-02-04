import { TestBed } from '@angular/core/testing';

import { DirectionGuard } from './direction.guard';

describe('DirectionGuard', () => {
  let guard: DirectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DirectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
