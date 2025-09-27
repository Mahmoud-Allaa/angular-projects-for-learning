import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes = [
    { id: 1, author: 'John Doe', title: 'Spaghetti', description: 'Delicious spaghetti with tomato sauce' },
    { id: 2, author: 'Jane Smith', title: 'Tacos', description: 'Tasty tacos with various fillings' },
    { id: 3, author: 'Alice Johnson', title: 'Pizza', description: 'Cheesy pizza with your choice of toppings' }
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe({author, title, description}: {author: string, title: string, description: string}) {
    const newRecipe = {
      id: Date.now(),
      author,
      title,
      description
    };
    this.recipes.push(newRecipe);
  }

  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(r => r.id !== id);
  }
}
