import { Component, DoCheck, OnInit } from '@angular/core'; 
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component ({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  providers: [
    RecipesService
  ]
})

export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe = null;

  constructor(
    private recipesService:RecipesService
  ) { }
  
  ngOnInit() {
    this.recipesService.selectedRecipe.subscribe (
      (selectedRecipe: Recipe) => this.selectedRecipe = selectedRecipe
    );
  } 
    
}