import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes = inject(RecipesService).getRecipes();
  currentUser = inject(AuthService).getCurrentUser();
  
}
