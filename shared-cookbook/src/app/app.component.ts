import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { CatalogComponent } from './recipes/catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RecipeCardComponent,
    CatalogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shared-cookbook';
}
