import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSoutenanceComponent } from './demande-soutenance.component';

describe('DemandeSoutenanceComponent', () => {
  let component: DemandeSoutenanceComponent;
  let fixture: ComponentFixture<DemandeSoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeSoutenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
