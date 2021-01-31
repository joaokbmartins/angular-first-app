import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeList: Recipe[] = null;
  subscription: Subscription;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipeList();
    this.subscription = this.recipesService.subscriberNewReplaySubject.subscribe(
      (recipeListUpdate: Recipe[]) => {
        this.recipeList = recipeListUpdate;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
