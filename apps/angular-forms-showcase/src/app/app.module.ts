import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular-forms-showcase/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@angular-forms-showcase/home').then(
              module => module.HomeModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
