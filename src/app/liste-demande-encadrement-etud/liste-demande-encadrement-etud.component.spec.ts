import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeEncadrementEtudComponent } from './liste-demande-encadrement-etud.component';

describe('ListeDemandeEncadrementEtudComponent', () => {
  let component: ListeDemandeEncadrementEtudComponent;
  let fixture: ComponentFixture<ListeDemandeEncadrementEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeEncadrementEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeEncadrementEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
