import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  // providers: [RecipesService],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = null;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipes();
    this.recipesService.emitRecipeListUpdate.subscribe(
      (recipeListUpdate: Recipe[]) => {
        // console.log('RECIPE LIST UPDATED - HOME PAGE', recipeListUpdate);
        console.log('SUBSCRIBED');
        this.recipeList = recipeListUpdate;
      }
    );
    console.log('AAAAAAAAAAAAAAAAAAAAA');
  }
}
