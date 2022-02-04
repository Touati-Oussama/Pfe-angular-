import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSoutenanceEnsComponent } from './liste-soutenance-ens.component';

describe('ListeSoutenanceEnsComponent', () => {
  let component: ListeSoutenanceEnsComponent;
  let fixture: ComponentFixture<ListeSoutenanceEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSoutenanceEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSoutenanceEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
