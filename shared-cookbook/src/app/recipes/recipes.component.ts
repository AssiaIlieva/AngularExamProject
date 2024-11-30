import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ApiRecipesService } from './api.recipes.service';
import { Recipe } from './recipe.model';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  private apiService = inject(ApiRecipesService);
  private destroyRef = inject(DestroyRef);

  recipes = signal<Recipe[]>([]);
  isFetching = signal<boolean>(false);
  error = signal<string>('');

  ngOnInit(): void {
    this.isFetching.set(true);
    const subcription = this.apiService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes.set(recipes);
        console.log(recipes);
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
      subcription.unsubscribe();
    });
  }
}
