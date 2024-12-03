import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { ApiRecipesService } from '../api.recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent implements OnInit {
  private apiService = inject(ApiRecipesService);
  private destroyRef = inject(DestroyRef);

  recipeId = input.required<string>();
  recipe = signal<Recipe>({
    _ownerId: '',
    recipeName: '',
    recipeType: '',
    preparationTime: 0,
    imageURL: '',
    description: '',
    ingredients: '',
    instructions: '',
    _createdOn: 0,
    _id: '',
  });
  isFetching = signal<boolean>(false);
  error = signal<string>('');

  ngOnInit(): void {
    this.isFetching.set(true);
    const subsription = this.apiService
      .getOneRecipe(this.recipeId())
      .subscribe({
        next: (recipe) => {
          this.recipe.set(recipe);
          console.log(recipe);
        },
        error: (error: Error) => {
          console.log(error);
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
    this.destroyRef.onDestroy(() => {
      subsription.unsubscribe();
    });
  }
}
