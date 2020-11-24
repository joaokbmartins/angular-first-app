import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class RecipeComponent {

  private selectedRecipe: Recipe = null;

  public showDetails(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  public getSelectedRecipe(): Recipe {
    return this.selectedRecipe;
  }

  public setSelectedRecipe(selectedRecipe: Recipe): void{
    this.selectedRecipe = selectedRecipe;
  }
    
}