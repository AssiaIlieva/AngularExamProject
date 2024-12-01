import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { Recipe } from './recipe.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRecipesService {
  baseUrl: string = 'http://localhost:3030/data';
  recipesUrl: string = `${this.baseUrl}/recipes`;
  last3QuaryUrl: string = '?sortBy=_createdOn%20desc&offset=0&pageSize=3';

  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);

  constructor() {}

  getRecipes() {
    return this.fetchRecipes(
      this.recipesUrl,
      'Something went wrong fetching the recipes, please try again later'
    );
  }

  getLast3Recipes() {
    return this.httpClient.get<Recipe[]>(
      `${this.recipesUrl}${this.last3QuaryUrl}`
    );
  }

  getOneRecipe(recipeId: string) {
    const url: string = `${this.recipesUrl}/${recipeId}`;
    return this.httpClient.get<Recipe>(url);
  }

  private fetchRecipes(url: string, errorMessage: string) {
    return this.httpClient.get<Recipe[]>(url).pipe(
      catchError((error) => {
        this.errorService.showError(errorMessage);
        console.log(error);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
