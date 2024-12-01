import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-recipe', component: RecipeCreateComponent },
];
