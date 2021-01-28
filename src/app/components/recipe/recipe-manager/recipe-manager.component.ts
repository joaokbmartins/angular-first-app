import { Component, OnInit, Renderer2 } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { BaseProduct } from 'src/app/shared/classes/base-product.model';
import { Ingredient } from '../../shopping-list/ingredient/ingredient.model';
import { ShoppingListProduct } from '../../shopping-list/shopping-list-product.interface';
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
  name: string = 'TEST';
  description: string = 'TEST DESCRIPTION';
  imagePath: string = 'https://ichef.bbci.co.uk/images/ic/832xn/p08nk96t.jpg';
  toUpdateRecipe: Recipe = null;
  recipeIngredientList: ShoppingListProduct<any>[] = null;
  managerOperation: string = 'Save Recipe';
  timerAmountManagement = null;
  isShowingMessage: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute // private recipesService: RecipesService
  ) {}

  ngOnInit<T extends BaseProduct>() {
    this.recipeIngredientList = <ShoppingListProduct<T>[]>[];
    if (this.activatedRoute.params['id']) {
      console.log('RECIPES MANAGER');
      this.activatedRoute.params.subscribe((params: Params) => {
        var toUpdateRecipe = this.recipesService.getRecipeById(params['id']);
        this.id = toUpdateRecipe.id;
        this.name = toUpdateRecipe.name;
        this.description = toUpdateRecipe.description;
        this.imagePath = toUpdateRecipe.imagePath;
        this.recipeIngredientList = toUpdateRecipe.ingredientList;
      });
    }
  }

  onUpdateItemAmount<T extends BaseProduct>(
    ingredientItem: ShoppingListProduct<T>,
    amount: number
  ) {
    if (amount > 0) {
      ingredientItem.amount = amount;
    } else {
      this.onRemoveItemFromIngredientList(ingredientItem);
    }
  }

  onManageRecipe(): void {
    switch (this.managerOperation) {
      case 'Save Recipe':
        console.log('onManageRecipe >>>>>>');
        this.onSaveRecipe();
        break;
      case 'Update Recipe':
        this.onUpdateRecipe();
        break;
    }
  }

  onSaveRecipe(): void {
    let newRecipe: Recipe = new Recipe(
      0,
      this.name,
      this.description,
      this.imagePath,
      this.recipeIngredientList
    );
    this.recipesService.saveRecipe(newRecipe);
  }

  onUpdateRecipe(): void {}

  onRemoveItemFromIngredientList<T extends BaseProduct>(
    ingredientListItem: ShoppingListProduct<T>
  ): void {
    this.recipeIngredientList.splice(
      this.recipeIngredientList.indexOf(ingredientListItem),
      1
    );
  }

  showAlertMessage() {
    this.isShowingMessage = true;
    setTimeout(() => {
      this.isShowingMessage = false;
    }, 3000);
  }

  doRecipeIngredientsIncludes(ingredient: Ingredient): boolean {
    for (let item of this.recipeIngredientList) {
      if (this.equals(item.product.ingredient, ingredient)) {
        this.showAlertMessage();
        return true;
      }
    }
    return false;
  }

  getNextIngredientListItemId(): number {
    return this.recipeIngredientList[this.recipeIngredientList.length - 1].id++;
  }

  onAddRecipeIngredient(ingredient: Ingredient) {
    if (!this.doRecipeIngredientsIncludes(ingredient)) {
      let nextId: number = this.getNextIngredientListItemId();
      this.recipeIngredientList.push({
        id: nextId,
        product: ingredient,
        amount: 1,
      });
    }
  }

  private equals(item: Ingredient, item2: Ingredient): boolean {
    if (item === item2) {
      return true;
    }
    if (item.id === item2.id || item.name === item2.name) {
      return true;
    }
    return false;
  }
}
