import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthApiService } from '../auth-api.service';
import { UserForAuth, UserForRegistration } from '../user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private userService = inject(AuthApiService);
  private onDestroy = inject(DestroyRef);
  private router = inject(Router);
  error = signal<string>('');

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });
  get usernamelIsInvalid() {
    return (
      this.form.controls.username.touched &&
      this.form.controls.username.dirty &&
      this.form.controls.username.invalid
    );
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }
  get confirmPasswordIsInvalid() {
    return (
      this.form.controls.confirmPassword.touched &&
      this.form.controls.confirmPassword.dirty &&
      this.form.controls.confirmPassword.invalid &&
      this.form.controls.confirmPassword !== this.form.controls.password
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { email, username, password } = this.form.value;
    const subscription = this.userService
      .register(email!, username!, password!)
      .subscribe({
        next: () => {
          console.log('Registration is successful');
          this.router.navigate(['/home']);
        },
        error: (error: Error) => {
          console.log(error);
          this.error.set(error.message);
        },
      });
    this.onDestroy.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
