import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'afs-login-reactive',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
    
    loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {}
}
