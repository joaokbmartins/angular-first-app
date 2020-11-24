import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {

  private collapsed: boolean = true;
  
  @Input()
  private recipeItem: Recipe = null;

  public getCollapsed():boolean {
    return this.collapsed;
  }

  public setCollpsed(collapsed:boolean):void {
    this.collapsed = collapsed;
  }

  public getRecipeItem(): Recipe {
    return this.recipeItem;
  }

  public setRecipeItem(recipeItem: Recipe): void {
    this.recipeItem = recipeItem;
  }

}