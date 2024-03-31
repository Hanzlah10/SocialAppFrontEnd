import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/LoginRequest.interface';
import { authActions } from '../../store/actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private store: Store) { }
  display: Error | undefined;

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {

    if (
      !this.form.value.email ||
      !this.form.value.password
    ) {
      this.display = Error('Some of the field is Blank');
      return;
    }

    const data: LoginRequestInterface = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.store.dispatch(authActions.login({ request: data }))




  }

}


