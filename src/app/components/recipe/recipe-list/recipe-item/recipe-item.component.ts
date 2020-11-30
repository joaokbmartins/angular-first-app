import { Component, Input } from '@angular/core'; 
import { Router } from '@angular/router';

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
    private recipesService: RecipesService,
    private router:Router
  ) {}

  onShowDetails(): void{
    this.router.navigate(['recipes', this.recipe.id]);
    // this.recipesService.selectedRecipe.emit(this.recipe);
  }

}