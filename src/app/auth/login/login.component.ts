import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../store/auth.actions';
import { selectLoginData } from '../store/auth.selectors';
import { matSnackBarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private route: Router,
    private store: Store,
    private matsnackService: matSnackBarService
  ) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else if (this.form.valid) {
      this.store.dispatch(login(this.form.value));
      this.store.select(selectLoginData).subscribe({
        next: (response) => {
          if (response) {
            console.log(response);
            this.route.navigate(['/feature/pointtable']);
          } else {
            this.matsnackService.showTopSnackBar(
              'Invalid username or password'
            );
          }
        },
      });
    }
  }
}
