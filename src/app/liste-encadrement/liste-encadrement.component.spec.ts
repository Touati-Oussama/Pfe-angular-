import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEncadrementComponent } from './liste-encadrement.component';

describe('ListeEncadrementComponent', () => {
  let component: ListeEncadrementComponent;
  let fixture: ComponentFixture<ListeEncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEncadrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
