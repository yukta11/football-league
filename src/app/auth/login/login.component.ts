import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {}
}
