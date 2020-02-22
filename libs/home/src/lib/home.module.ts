import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '@angular-forms-showcase/material';
import { LoginShowcaseComponent } from './components/login-showcase/login-showcase.component';
import { LoginTemplateDrivenModule } from '@angular-forms-showcase/login/template-driven';
import { LoginReactiveModule } from '@angular-forms-showcase/login/reactive';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: 'home',
                component: HomeComponent,
                children: [
                    {
                        path: 'login-showcase',
                        component: LoginShowcaseComponent
                    }
                ]
            }
        ]),
        LoginTemplateDrivenModule,
        LoginReactiveModule
    ],
    declarations: [HomeComponent, LoginShowcaseComponent]
})
export class HomeModule {}
