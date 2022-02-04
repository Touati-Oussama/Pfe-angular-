import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeEncadrementComponent } from './add-demande-encadrement.component';

describe('AddDemandeEncadrementComponent', () => {
  let component: AddDemandeEncadrementComponent;
  let fixture: ComponentFixture<AddDemandeEncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandeEncadrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandeEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
