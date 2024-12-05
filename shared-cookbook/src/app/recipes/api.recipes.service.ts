import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { NewRecipeData, Recipe } from './recipe.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRecipesService {
  recipesUrl: string = `/api/data/recipes`;
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

  createRecipe(
    recipeName: string,
    recipeType: string,
    preparationTime: number,
    imageURL: string,
    description: string,
    ingredients: string,
    instructions: string
  ) {
    const payload: NewRecipeData = {
      recipeName,
      recipeType,
      preparationTime,
      imageURL,
      description,
      ingredients,
      instructions,
    };
    return this.httpClient.post<NewRecipeData>(this.recipesUrl, payload);
  }
}
