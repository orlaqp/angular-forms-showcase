import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-forms-showcase/material';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports:[LoginReactiveComponent],
  declarations: [LoginReactiveComponent]
})
export class LoginReactiveModule {}
