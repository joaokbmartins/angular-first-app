import { Component, DoCheck, Input } from '@angular/core'; 

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {

  collapsed: boolean = true;

  @Input()
  recipeToDetail: Recipe = null;

  constructor(
    private recipesService:RecipesService
  ) { }

  addToShoppingList(): void {
    this.recipesService.addToShoppingList(this.recipeToDetail.ingredients);
  }
  
}