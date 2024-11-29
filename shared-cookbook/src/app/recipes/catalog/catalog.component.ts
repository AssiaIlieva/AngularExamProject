import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Recipe } from '../recipe.model';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef);

  recipes: Recipe[] = [];
  isFetching: boolean = false;

  ngOnInit(): void {
    this.isFetching = true;
    const subscription = this.apiService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.isFetching = false;
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
