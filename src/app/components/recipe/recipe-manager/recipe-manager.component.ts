import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: 'recipe-manager.component.html'
})
export class RecipeManagerComponent implements OnInit {

  recipeId: number = 0;
  recipeName: string = null;
  recipeAmount: number = 0;
  managerOperation: string = 'Save New Recipe';

  recipeToUpdate: Recipe = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private recipesService: RecipesService
  ) { }

  ngOnInit() {
    console.log('RECIPES MANAGER');
    console.log(this.activatedRoute.params);
    
  }

}