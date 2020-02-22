import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'afs-login-reactive',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
    formGroup: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
