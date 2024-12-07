import { Component, input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../../shared/truncate.pipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink, TruncatePipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipe = input.required<Recipe>();
}
