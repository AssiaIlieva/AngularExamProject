import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { NewRecipeData, Recipe } from './recipe.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRecipesService {
  recipesUrl: string = `/api/data/recipes`;
  last4QuaryUrl: string = '?sortBy=_createdOn%20desc&offset=0&pageSize=4';

  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);

  constructor() {}

  getRecipes() {
    return this.fetchRecipes(
      this.recipesUrl,
      'Something went wrong fetching the recipes, please try again later'
    );
  }

  getLast4Recipes() {
    return this.httpClient.get<Recipe[]>(
      `${this.recipesUrl}${this.last4QuaryUrl}`
    );
  }

  getOneRecipe(recipeId: string) {
    const url: string = `${this.recipesUrl}/${recipeId}`;
    return this.httpClient.get<Recipe>(url);
  }

  private fetchRecipes(url: string, errorMessage: string) {
    return this.httpClient.get<Recipe[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.showError(errorMessage);
        console.log(error);

        return throwError(() => new Error(errorMessage));
      })
    );
  }

  createRecipe(
    recipeName: string,
    recipeType: string,
    preparationTime: number,
    imageURL: string,
    description: string,
    ingredients: string,
    instructions: string
  ) {
    return this.httpClient.post<Recipe>(this.recipesUrl, {
      recipeName,
      recipeType,
      preparationTime,
      imageURL,
      description,
      ingredients,
      instructions,
    });
  }

  removeRecipe(recipeId: string) {
    const url: string = `${this.recipesUrl}/${recipeId}`;
    return this.httpClient.delete<Recipe>(url);
  }

  updateRecipe(recipeId: string, data: NewRecipeData) {
    const url: string = `${this.recipesUrl}/${recipeId}`;
    return this.httpClient.put<Recipe>(url, data);
  }
}
