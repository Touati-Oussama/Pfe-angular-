import { TestBed } from '@angular/core/testing';

import { EnGuradGuard } from './en-gurad.guard';

describe('EnGuradGuard', () => {
  let guard: EnGuradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnGuradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
