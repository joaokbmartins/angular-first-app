import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    console.log(this.activatedRoute.snapshot);
    console.log(this.router);

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('>> ', params);
      var id: number = Number(params['id']);
      if (isNaN(id)) {
        this.router.navigate(['recipes']);
      } else {
        console.log('getRecipe: ', id);
        this.recipeToDetail = this.recipesService.getRecipeById(id);
      }
      console.log('this.recipeToDetail: ', this.recipeToDetail);
    });
  }

  addToShoppingList(): void {
    // this.recipesService.addToShoppingList(this.recipeToDetail.ingredientList);
  }
}
