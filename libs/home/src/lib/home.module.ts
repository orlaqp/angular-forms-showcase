import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '@angular-forms-showcase/material';
import { LoginShowcaseComponent } from './components/login-showcase/login-showcase.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent, children: [
          {path: 'login-showcase', component: LoginShowcaseComponent},
      ]},
    ])
  ],
  declarations: [HomeComponent, LoginShowcaseComponent]
})
export class HomeModule {}
