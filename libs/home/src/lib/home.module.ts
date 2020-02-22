import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '@angular-forms-showcase/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
