import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSoutenanceEtudComponent } from './liste-soutenance-etud.component';

describe('ListeSoutenanceEtudComponent', () => {
  let component: ListeSoutenanceEtudComponent;
  let fixture: ComponentFixture<ListeSoutenanceEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSoutenanceEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSoutenanceEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
