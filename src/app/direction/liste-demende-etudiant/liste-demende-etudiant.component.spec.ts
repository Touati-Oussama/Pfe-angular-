import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemendeEtudiantComponent } from './liste-demende-etudiant.component';

describe('ListeDemendeEtudiantComponent', () => {
  let component: ListeDemendeEtudiantComponent;
  let fixture: ComponentFixture<ListeDemendeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemendeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemendeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
