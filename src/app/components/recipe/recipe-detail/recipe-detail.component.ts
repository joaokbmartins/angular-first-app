import { Component, DoCheck, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
  RouterState,
} from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      var id: number = Number(params['id']);
      this.recipeToDetail = this.recipesService.getRecipeById(id);
    });
  }

  addToShoppingList(): void {
    this.recipesService.addToShoppingList(this.recipeToDetail.ingredients);
  }
}
