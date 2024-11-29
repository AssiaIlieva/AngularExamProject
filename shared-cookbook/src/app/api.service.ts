import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://localhost:3030/data';
  recipesUrl: string = `${this.baseUrl}/recipes`;

  private httpClient = inject(HttpClient);

  constructor() {}

  getRecipes() {
    return this.httpClient.get<Recipe[]>(this.recipesUrl);
  }

  getLast3Recipes() {
    const url: string = `${this.recipesUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`;
    return this.httpClient.get<Recipe[]>(url);
  }

  getOneRecipe(recipeId: string) {
    const url: string = `${this.recipesUrl}/${recipeId}`;
    return this.httpClient.get<Recipe>(url);
  }
}
