import { Component, Input } from '@angular/core'; 

import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

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
    this.recipesService.selectedRecipe.emit(this.recipe);
  }

}