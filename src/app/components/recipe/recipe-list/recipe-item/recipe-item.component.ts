import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe = null;

  constructor(
    private recipesService:RecipesService
  ) {}

  public showDetails(): void{ 
    this.recipesService.onShowDetails(this.recipe);
  }

}