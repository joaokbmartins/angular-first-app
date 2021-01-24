import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { IngredientListItem } from './ingredient/ingredient-list-item.model';
import { Ingredient } from './ingredient/ingredient.model';
import { ShoppingListItem } from './shopping-list-item.model';

@Injectable()
export class ShoppingListService implements OnInit {
  alertMessage: string = null;
  shoppingList: ShoppingListItem[] = null;
  emitShoppingListUpdated: EventEmitter<ShoppingListItem[]> = new EventEmitter<
    ShoppingListItem[]
  >();

  constructor() {
    this.shoppingList = <ShoppingListItem[]>[];
  }

  ngOnInit() {
    // this.shoppingList = <ShoppingListItem[]>[];
  }

  getShoppingList(): ShoppingListItem[] {
    return this.shoppingList.slice();
  }

  onShoppingListUpdated(): void {
    this.emitShoppingListUpdated.emit(this.getShoppingList());
  }

  public addIngredientsFromRecipeToShoppingList(
    ingredientList: IngredientListItem[]
  ): void {
    ingredientList.forEach((ingredientListItem) =>
      this.addItemToShoppingList(ingredientListItem)
    );
    this.onShoppingListUpdated();
  }

  public addItemToShoppingList<T>(items: T) {
    this.shoppingList.push();
  }

  public deleteIngredient(toDelete: Ingredient): void {
    // this.alertMessage = null;
    // var existent: boolean = false;
    // var insuficientAmount: boolean = false;
    // this.ingredients.forEach((shoppingListItem, index) => {
    //   if (shoppingListItem.name == toDelete.name) {
    //     var found = this.ingredients[index];
    //     if (found.amount > toDelete.amount) {
    //       this.ingredients[index].amount = found.amount - toDelete.amount;
    //     } else if (found.amount == toDelete.amount) {
    //       this.ingredients.splice(index, 1);
    //     } else {
    //       insuficientAmount = true;
    //     }
    //     existent = true;
    //     return;
    //   }
    // });
    // if (!existent) {
    //   this.alertMessage = 'Ingredient not found.';
    // } else if (insuficientAmount) {
    //   this.alertMessage =
    //     "You're trying to delete more ingredients than you have on your list.";
    // }
    // this.emitShoppingListUpdated.emit(this.ingredients.slice());
  }

  public onCleanList(): void {
    // this.alertMessage = null;
    // this.ingredients = new Array<Ingredient>();
    // this.emitShoppingListUpdated.emit(this.ingredients.slice());
  }
}
