import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveComponent } from './login-reactive.component';

describe('LoginTemplateDrivenComponent', () => {
    let component: LoginReactiveComponent;
    let fixture: ComponentFixture<LoginReactiveComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginReactiveComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
