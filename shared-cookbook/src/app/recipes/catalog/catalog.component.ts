import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.apiService.getRecipes().subscribe((recipes) => {
      console.log(recipes);
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
