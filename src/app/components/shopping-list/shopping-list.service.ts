import { Injectable, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseProduct } from 'src/app/shared/classes/base-product.model';
import { ShoppingListProduct } from './shopping-list-product.interface';

@Injectable()
export class ShoppingListService implements OnInit {
  alertMessage: string = null;
  shoppingList: ShoppingListProduct<any>[] = null;

  emitShoppingListUpdated: Subject<ShoppingListProduct<any>[]> = new Subject<
    ShoppingListProduct<any>[]
  >();

  constructor() {
    this.shoppingList = <ShoppingListProduct<any>[]>[];
    this.shoppingList.push();
  }

  ngOnInit() {}

  getShoppingList<T extends BaseProduct>(): ShoppingListProduct<T>[] {
    return this.shoppingList.slice();
  }

  emitOnShoppingListUpdated(): void {
    this.emitShoppingListUpdated.next(this.getShoppingList());
  }

  addIngredientsFromRecipeToShoppingList<T extends BaseProduct>(
    ingredientProductList: ShoppingListProduct<T>[]
  ): void {
    ingredientProductList.forEach((ingredientProduct) =>
      this.addProductToShoppingList(ingredientProduct)
    );
  }

  getIdNextShoppingListItem<T extends BaseProduct>(): number {
    let lastItem: ShoppingListProduct<T> = this.shoppingList[
      this.shoppingList.length - 1
    ];
    return lastItem ? lastItem.product.id + 1 : 0;
  }

  equalsProduct<T extends BaseProduct>(
    product: any,
    product1: ShoppingListProduct<T>
  ): boolean {
    if (
      product['__proto__'].constructor ===
      product1.product['__proto__'].constructor
    ) {
      for (let prop of Object.getOwnPropertyNames(product)) {
        if (product[prop] == product1.product[prop]) {
          return true;
        }
      }
    }
    return false;
  }

  contaisProduct(product: any): boolean {
    return this.shoppingList.some((listItem) => {
      return this.equalsProduct(listItem.product, product);
    });
  }

  addProductToShoppingList<T extends BaseProduct>(
    product: ShoppingListProduct<T>
  ) {
    if (!this.contaisProduct(product)) {
      product.id = this.getIdNextShoppingListItem();
      this.shoppingList.push({
        id: product.id,
        amount: product.amount,
        product: product.product,
      });
    }
    this.emitOnShoppingListUpdated();
  }

  removeItemFromShoppingList<T extends BaseProduct>(
    item: ShoppingListProduct<T>
  ) {
    let index: number = this.shoppingList.indexOf(item);
    this.shoppingList.splice(index, 1);
    this.emitOnShoppingListUpdated();
  }

  onCleanList<T extends BaseProduct>(): void {
    if (confirm('Remove all items from list?')) {
      this.shoppingList = <ShoppingListProduct<T>[]>[];
      this.emitOnShoppingListUpdated();
    }
  }
}
