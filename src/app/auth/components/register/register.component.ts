import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authService.service';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/RegisterRequest.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private store: Store) { }
  display: Error | undefined;
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {

    if (
      !this.form.value.email ||
      !this.form.value.username ||
      !this.form.value.password
    ) {
      this.display = Error('Some of the field is Blank');

      return;
    }
    const data: RegisterRequestInterface = {
      email: this.form.value.email,
      username: this.form.value.username,
      password: this.form.value.password,
    }


    // this.authser.register(data).subscribe(value => console.log(value))
    this.store.dispatch(authActions.register({ request: data }))
    // console.log(this.form.value)
  }

}
