import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(AuthApiService);
  error = signal<string>('');

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    console.log(email, password);
    this.userService.login(email, password).subscribe({
      next: () => {
        console.log('Login successful!');
      },
      error: (error: Error) => {
        console.log(error);
        this.error.set(error.message);
      },
    });
  }
}
