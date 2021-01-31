import { Component } from '@angular/core';
import { BaseProduct } from 'src/app/shared/classes/base-product.model';

import { ShoppingListProduct } from '../shopping-list-product.interface';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
})
export class ShoppingSearchComponent {
  alertMessage: string = null;

  ingredientSelected: ShoppingListProduct<any> = null;

  constructor(private shoppingListService: ShoppingListService) {}

  public onClearList(): void {
    this.shoppingListService.onCleanList();
  }

  public onAddSelectedProduct<T extends BaseProduct>(product: T): void {
    this.shoppingListService.addProductToShoppingList(<ShoppingListProduct<T>>{
      id: 0,
      product: product,
      amount: 1,
    });
  }
}
