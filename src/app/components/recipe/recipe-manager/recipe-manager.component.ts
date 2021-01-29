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
  // providers: [RecipesService],
})
export class RecipeManagerComponent implements OnInit {
  id: number = 0;
  name: string = 'TEST';
  description: string = 'TEST DESCRIPTION';
  imagePath: string = 'https://ichef.bbci.co.uk/images/ic/832xn/p08nk96t.jpg';
  toUpdateRecipe: Recipe = null;
  recipeIngredientList: ShoppingListProduct<Ingredient>[] = null;
  managerOperation: string = 'Save Recipe';
  timerAmountManagement = null;
  isShowingMessage: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute // private recipesService: RecipesService
  ) {}

  ngOnInit<T extends BaseProduct>() {
    this.recipeIngredientList = <ShoppingListProduct<T>[]>[];
    this.activatedRoute.params.subscribe((params: Params) => {
      let recipeIdFromUrl: number = +params['id'];
      if (recipeIdFromUrl >= 0 && !isNaN(+recipeIdFromUrl)) {
        var toUpdateRecipe = this.recipesService.getRecipeById(recipeIdFromUrl);
        this.id = recipeIdFromUrl;
        this.name = toUpdateRecipe.name;
        this.description = toUpdateRecipe.description;
        this.imagePath = toUpdateRecipe.imagePath;
        this.recipeIngredientList = toUpdateRecipe.ingredientList;
        this.managerOperation = 'Update Recipe';
      }
    });
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

  onUpdateRecipe(): void {
    let newRecipe: Recipe = new Recipe(
      this.id,
      this.name,
      this.description,
      this.imagePath,
      this.recipeIngredientList
    );
    this.recipesService.updateRecipe(newRecipe);
  }

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
      if (this.equals(item, ingredient)) {
        this.showAlertMessage();
        return true;
      }
    }
    return false;
  }

  private equals(
    item: ShoppingListProduct<Ingredient>,
    item2: Ingredient
  ): boolean {
    if (item.product === item2) {
      return true;
    }
    if (item.id === item2.id || item.product.name === item2.name) {
      return true;
    }
    return false;
  }

  getNextIngredientListItemId(): number {
    let lastIngredinetFromList: ShoppingListProduct<Ingredient> = this
      .recipeIngredientList[this.recipeIngredientList.length - 1];
    return lastIngredinetFromList ? lastIngredinetFromList.id : 0;
  }

  onAddIngredientToRecipe(ingredient: Ingredient) {
    if (!this.doRecipeIngredientsIncludes(ingredient)) {
      let nextId: number = this.getNextIngredientListItemId();
      this.recipeIngredientList.push({
        id: nextId,
        product: ingredient,
        amount: 1,
      });
    }
  }
}
