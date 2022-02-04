import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDirectionComponent } from './navbar-direction.component';

describe('NavbarDirectionComponent', () => {
  let component: NavbarDirectionComponent;
  let fixture: ComponentFixture<NavbarDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
