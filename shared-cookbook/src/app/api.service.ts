import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3030/data';
  private httpClient = inject(HttpClient);

  constructor() {}

  getRecipes() {
    return this.httpClient.get(`${this.baseUrl}/recipes`);
  }
}
