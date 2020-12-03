import { Component, OnInit } from '@angular/core';
import {
  Router,
  Params,
  ActivatedRoute
} from '@angular/router';
import { Ingredient } from '../../shopping-list/ingredient/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: 'recipe-manager.component.html',
  providers: [
    RecipesService,
  ]
})
export class RecipeManagerComponent implements OnInit {

  id: number = 0;
  name: string = null;
  amount: number = 0;
  description: string = null;
  imagePath: string = null;
  ingredients: Array<Ingredient> = null;

  toUpdateRecipe: Recipe = null;

  managerOperation: string = 'Save Recipe';

  // recipeToUpdate: Recipe = null;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private recipesService: RecipesService
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    if (this.activatedRoute.params['id']) {
      console.log('RECIPES MANAGER');
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          var toUpdateRecipe = this.recipesService.getRecipeById(params['id']);
          this.id = toUpdateRecipe.id;
          this.name = toUpdateRecipe.name;
          this.description = toUpdateRecipe.description;
          this.imagePath = toUpdateRecipe.imagePath;
          this.ingredients = toUpdateRecipe.ingredients;
        }
      );
    }

  }

  onManageRecipe(): void {
    switch (this.managerOperation) {
      case 'Save Recipe':
        this.onSaveRecipe();
        break;
      case 'Update Recipe':
        this.onUpdateRecipe();
        break;
    }
  }

  onSaveRecipe(): void {
    var id = this.recipesService.getNextId();
    this.recipesService.saveRecipe(
      new Recipe(id, this.name, this.description, this.imagePath, this.ingredients));
  }

  onUpdateRecipe(): void {

  }

}