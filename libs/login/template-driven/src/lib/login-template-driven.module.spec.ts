import { async, TestBed } from '@angular/core/testing';
import { LoginTemplateDrivenModule } from './login-template-driven.module';

describe('LoginTemplateDrivenModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [LoginTemplateDrivenModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(LoginTemplateDrivenModule).toBeDefined();
    });
});
