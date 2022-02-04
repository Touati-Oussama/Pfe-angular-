import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeEncadrementEnsComponent } from './liste-demande-encadrement-ens.component';

describe('ListeDemandeEncadrementEnsComponent', () => {
  let component: ListeDemandeEncadrementEnsComponent;
  let fixture: ComponentFixture<ListeDemandeEncadrementEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeEncadrementEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeEncadrementEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
