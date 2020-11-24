import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  private recipe: Recipe = null;

  @Output()
  showRecipeDetails: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() {}

  public showDetails(): void{ 
    this.showRecipeDetails.emit();
  }

  public getRecipe(): Recipe {
    return this.recipe;
  }
 
 
}