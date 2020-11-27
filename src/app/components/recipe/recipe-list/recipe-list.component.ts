import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../recipe.model';

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
    this.recipes = this.recipesService.recipes;
  }

}