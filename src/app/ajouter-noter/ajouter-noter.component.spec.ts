import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNoterComponent } from './ajouter-noter.component';

describe('AjouterNoterComponent', () => {
  let component: AjouterNoterComponent;
  let fixture: ComponentFixture<AjouterNoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterNoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
