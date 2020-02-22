import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplateDrivenComponent } from './components/login-template-driven/login-template-driven.component';
import { MaterialModule } from '@angular-forms-showcase/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule],
    exports: [LoginTemplateDrivenComponent],
    declarations: [LoginTemplateDrivenComponent]
})
export class LoginTemplateDrivenModule {}
