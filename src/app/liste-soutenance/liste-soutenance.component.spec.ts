import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSoutenanceComponent } from './liste-soutenance.component';

describe('ListeSoutenanceComponent', () => {
  let component: ListeSoutenanceComponent;
  let fixture: ComponentFixture<ListeSoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSoutenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
