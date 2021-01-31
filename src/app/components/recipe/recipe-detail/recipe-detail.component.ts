import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  collapsed: boolean = true;

  recipeToDetail: Recipe = null;

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      var id: number = Number(params['id']);
      if (isNaN(id)) {
        this.router.navigate(['recipes']);
      } else {
        this.recipeToDetail = this.recipesService.getRecipeById(id);
      }
    });
  }

  addRecipeIngredientsToShoppingList(): void {
    this.shoppingListService.addIngredientsFromRecipeToShoppingList(
      this.recipeToDetail.ingredientList
    );
  }
}
