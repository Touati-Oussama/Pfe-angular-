import { TestBed } from '@angular/core/testing';

import { DemandeEncadrementService } from './demande-encadrement.service';

describe('DemandeEncadrementService', () => {
  let service: DemandeEncadrementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeEncadrementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
