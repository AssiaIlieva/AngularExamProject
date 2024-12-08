import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { ApiRecipesService } from '../api.recipes.service';
import { Recipe } from '../recipe.model';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from '../../auth/auth-api.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent implements OnInit {
  private apiService = inject(ApiRecipesService);
  private destroyRef = inject(DestroyRef);
  private authService = inject(AuthApiService);
  private router = inject(Router);

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
  isOwner = computed(() => {
    const user = this.authService.getLoggedUserFromStorage();
    return user ? user._id === this.recipe()._ownerId : false;
  });

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

  deleteRecipe() {
    if (confirm('Are you sure you want to delete this recipe?')) {
      const subscription = this.apiService
        .removeRecipe(this.recipe()._id)
        .subscribe({
          next: () => {
            this.router.navigate(['/recipes']);
          },
          error: (error) => {
            console.error('Failed to delete recipe:', error);
          },
        });
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
    }
  }
}
