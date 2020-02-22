import { async, TestBed } from '@angular/core/testing';
import { LoginReactiveModule } from './login-reactive.module';

describe('LoginReactiveModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginReactiveModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginReactiveModule).toBeDefined();
  });
});
