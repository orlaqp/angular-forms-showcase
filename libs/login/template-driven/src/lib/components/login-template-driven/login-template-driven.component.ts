import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'afs-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.scss']
})
export class LoginTemplateDrivenComponent implements OnInit {
  @ViewChild('form') form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('submitting the form');
    console.log(this.form.value);

  }

}
