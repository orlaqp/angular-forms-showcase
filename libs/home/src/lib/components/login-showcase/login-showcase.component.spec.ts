import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginShowcaseComponent } from './login-showcase.component';

describe('LoginShowcaseComponent', () => {
  let component: LoginShowcaseComponent;
  let fixture: ComponentFixture<LoginShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
