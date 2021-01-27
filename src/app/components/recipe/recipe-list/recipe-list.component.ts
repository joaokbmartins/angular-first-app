import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipeList: Array<Recipe> = new Array<Recipe>();
  
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipes();
    this.recipesService.emitRecipeListUpdate.subscribe(
      (recipeListUpdate: Array<Recipe>) => {
        console.log('RECIPE LIST UPDATED - HOME PAGE', recipeListUpdate);
        this.recipeList = recipeListUpdate;
      }
    );
    // console.log(this.recipes);
  }
}
