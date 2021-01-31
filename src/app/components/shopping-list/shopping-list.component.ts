import { Component, Input, OnInit } from '@angular/core';
import { BaseProduct } from 'src/app/shared/classes/base-product.model';
import { ShoppingListProduct } from './shopping-list-product.interface';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingListProduct<any>[];
  @Input() alertMessage: string = null;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit<T extends BaseProduct>() {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.emitShoppingListUpdated.subscribe(
      (shoppingListUpdated: ShoppingListProduct<T>[]) => {
        this.shoppingList = shoppingListUpdated;
      }
    );
  }

  removeItemFromShoppingList(idShoppingListItem: number) {
    let itemIndex: number = this.shoppingList.findIndex((item) => {
      return item.id == idShoppingListItem;
    });
    this.shoppingList.splice(itemIndex, 1);
  }

  onUpdateItemAmount<T extends BaseProduct>(
    shoppingItem: ShoppingListProduct<T>,
    amount: number
  ) {
    if (amount > 0) {
      shoppingItem.amount = amount;
    } else {
      this.shoppingListService.removeItemFromShoppingList(shoppingItem);
    }
  }

  onClearList() {
    this.shoppingListService.onCleanList();
  }
}
