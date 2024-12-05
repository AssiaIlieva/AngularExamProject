import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private usersUrl = '/api/users';
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  login(email: string, password: string) {
    return this.httpClient
      .post<{
        email: string;
        username: string;
        _id: string;
        accessToken: string;
      }>(`${this.usersUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('auth', JSON.stringify(response));
          console.log('Login successful:', response);
        }),
        catchError((error) => {
          const errorMessage =
            error.error?.message || 'Login failed. Please try again.';
          this.errorService.showError(errorMessage);
          console.error(error);

          return throwError(() => new Error(errorMessage));
        })
      );
  }

  register(email: string, username: string, password: string) {
    return this.httpClient
      .post<{
        email: string;
        username: string;
        _id: string;
        accessToken: string;
      }>(`${this.usersUrl}/register`, { email, username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('auth', JSON.stringify(response));
          console.log('Registration successful:', response);
        }),
        catchError((error) => {
          const errorMessage =
            error.error?.message || 'Registration failed. Please try again.';
          this.errorService.showError(errorMessage);
          console.error(error);

          return throwError(() => new Error(errorMessage));
        })
      );
  }

  // Логаут
  logout() {
    localStorage.removeItem('auth');
    console.log('User logged out.');
  }
}
