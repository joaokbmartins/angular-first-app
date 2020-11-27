import { Component, DoCheck } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements DoCheck {

  collapsed: boolean = true;
  recipeToDetail: Recipe = null;

  constructor(
    private recipesService:RecipesService
  ){}

  ngDoCheck() { 
    this.recipeToDetail = this.recipesService.actualRecipe;
  }

}