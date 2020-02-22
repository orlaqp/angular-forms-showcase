import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-forms-showcase/material';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports:[LoginReactiveComponent],
  declarations: [LoginReactiveComponent]
})
export class LoginReactiveModule {}
