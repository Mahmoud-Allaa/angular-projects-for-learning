import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RecipesService } from '../services/recipes.service';


// Angular Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-recipe',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss'
})
export class NewRecipeComponent {
  authService = inject(AuthService);
  recipesService = inject(RecipesService);

  newRecipeForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.newRecipeForm = this.fb.group({
      author: [{ value: this.authService.getCurrentUser()?.username, disabled: true }],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.authService.getCurrentUser() === null) {
      alert('You must be logged in to add a recipe!');
      return;
    }
    if (this.newRecipeForm.valid) {
      this.recipesService.addRecipe(this.newRecipeForm.getRawValue());
      this.newRecipeForm.reset();
      this.router.navigate(['/recipes']);
    }
  }
}
