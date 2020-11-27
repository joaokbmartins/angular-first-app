import { Component, DoCheck } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from './recipe.model';

@Component ({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class RecipeComponent implements DoCheck{

  selectedRecipe: Recipe = null;

  constructor(
    private recipesService:RecipesService
  ) { }
  
  ngDoCheck() {
    this.selectedRecipe = this.recipesService.actualRecipe;
  } 
    
}