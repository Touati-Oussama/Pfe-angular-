import { TestBed } from '@angular/core/testing';

import { DemandeEnseignantService } from './demande-enseignant.service';

describe('DemandeEnseignantService', () => {
  let service: DemandeEnseignantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeEnseignantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
