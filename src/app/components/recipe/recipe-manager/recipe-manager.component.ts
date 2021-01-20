import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IngredientListItem } from '../../shopping-list/ingredient/ingredient-list-item.model';
import { Ingredient } from '../../shopping-list/ingredient/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: 'recipe-manager.component.html',
  styleUrls: ['recipe-manager.component.css'],
  providers: [RecipesService],
})
export class RecipeManagerComponent implements OnInit {
  id: number = 0;
  name: string = null;
  amount: number = 0;
  description: string = null;
  imagePath: string = null;
  ingredientList: IngredientListItem[] = null;

  toUpdateRecipe: Recipe = null;

  managerOperation: string = 'Save Recipe';

  // recipeToUpdate: Recipe = null;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute // private recipesService: RecipesService
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.ingredientList = <IngredientListItem[]>[];
    if (this.activatedRoute.params['id']) {
      console.log('RECIPES MANAGER');
      this.activatedRoute.params.subscribe((params: Params) => {
        var toUpdateRecipe = this.recipesService.getRecipeById(params['id']);
        this.id = toUpdateRecipe.id;
        this.name = toUpdateRecipe.name;
        this.description = toUpdateRecipe.description;
        this.imagePath = toUpdateRecipe.imagePath;
        this.ingredientList = toUpdateRecipe.ingredientList;
      });
    }
    this.ingredientList.push(
      { ingredient: new Ingredient(1, 'A'), amount: 1 },
      { ingredient: new Ingredient(2, 'A'), amount: 1 },
      { ingredient: new Ingredient(3, 'A'), amount: 1 },
      { ingredient: new Ingredient(4, 'A'), amount: 1 },
    )
  }

  onIncreaseAmount(ingredientListItem: IngredientListItem) {
    if (ingredientListItem.amount < 99) {
      ingredientListItem.amount++;
    } else {
      console.log('MAX REACHED');
    }
  }

  onSaveRecipe(): void {
    this.recipesService.saveRecipe(
      new Recipe(
        0,
        this.name,
        this.description,
        this.imagePath,
        this.ingredientList
      )
    );
  }

  onUpdateRecipe(): void { }

  onDecreaseAmount(ingredientListItem: IngredientListItem) {
    if (ingredientListItem.amount > 1) {
      ingredientListItem.amount--;
    } else {
      if (confirm('Remove item from list?')) {
        this.onRemoveItemFromIngredientList(ingredientListItem);
      }
    }
  }

  onRemoveItemFromIngredientList(ingredientListItem: IngredientListItem) {
    this.ingredientList.splice(this.ingredientList.indexOf(ingredientListItem), 1);
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

  onAddRecipeIngredient(ingredient: Ingredient) {
    this.ingredientList.push({ ingredient: ingredient, amount: 1 });
  }
}
