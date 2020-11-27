import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {

  recipes:Array<Recipe> = new Array<Recipe>();

  constructor(
    private recipesService:RecipesService
  ) {}
  
  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

}