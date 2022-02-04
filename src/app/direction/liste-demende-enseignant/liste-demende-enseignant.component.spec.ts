import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemendeEnseignantComponent } from './liste-demende-enseignant.component';

describe('ListeDemendeEnseignantComponent', () => {
  let component: ListeDemendeEnseignantComponent;
  let fixture: ComponentFixture<ListeDemendeEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemendeEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemendeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
