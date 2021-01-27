import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

import { IngredientListItem } from './ingredient/ingredient-list-item.model';
import { Ingredient } from './ingredient/ingredient.model';
import { ShoppingListItem } from './shopping-list-item.model';

@Injectable()
export class ShoppingListService implements OnInit {
  alertMessage: string = null;
  shoppingList: ShoppingListItem[] = null;
  @Output() emitShoppingListUpdated: EventEmitter<
    ShoppingListItem[]
  > = new EventEmitter<ShoppingListItem[]>();

  constructor() {
    this.shoppingList = <ShoppingListItem[]>[];
    this.shoppingList.push();
  }

  ngOnInit() {}

  getShoppingList(): ShoppingListItem[] {
    // console.log('getShoppingList: ', this.shoppingList.slice());
    return this.shoppingList.slice();
  }

  emitOnShoppingListUpdated(): void {
    this.emitShoppingListUpdated.emit(this.getShoppingList());
    // console.log('emitted');
  }

  addIngredientsFromRecipeToShoppingList(
    ingredientList: IngredientListItem[]
  ): void {
    ingredientList.forEach((ingredientListItem) =>
      this.addProductToShoppingList(ingredientListItem)
    );
  }

  getIdNextShoppingListItem(): number {
    let lastItem: ShoppingListItem = this.shoppingList[
      this.shoppingList.length - 1
    ];
    return lastItem ? lastItem.id + 1 : 0;
  }

  contaisProduct(product: any): boolean {
    return this.shoppingList.some((listItem) => {
      return this.equalsProduct(listItem.product, product);
    });
  }

  equalsProduct(item: any, item1: any): boolean {
    if (item['__proto__'].constructor === item1['__proto__'].constructor) {
      for (let prop of Object.getOwnPropertyNames(item)) {
        if (item[prop] == item1[prop]) {
          return true;
        }
      }
    }
    return false;
  }

  addProductToShoppingList(product: any) {
    if (!this.contaisProduct(product)) {
      let nextItemIndex: number = this.getIdNextShoppingListItem();
      this.shoppingList.push({
        id: nextItemIndex,
        amount: 1,
        product: product,
      });
    }
    this.emitOnShoppingListUpdated();
  }

  removeItemFromShoppingList(item: ShoppingListItem) {
    let index: number = this.shoppingList.indexOf(item);
    this.shoppingList.splice(index, 1);
    this.emitOnShoppingListUpdated();
  }

  onCleanList(): void {
    if (confirm('Remove all items from list?')) {
      this.shoppingList = <ShoppingListItem[]>[];
      this.emitOnShoppingListUpdated();
    }
  }
}
