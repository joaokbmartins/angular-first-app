import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { IngredientListItem } from './ingredient/ingredient-list-item.model';

import { ShoppingListItem } from './shopping-list-item.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [
    // ShoppingListService
  ],
})
export class ShoppingListComponent implements OnInit, AfterViewInit {
  shoppingList: ShoppingListItem[];
  @Input() alertMessage: string = null;

  constructor(
    private shoppingListService: ShoppingListService // private elRef: ElementRef
  ) {}

  ngOnInit() {
    // console.log(this.shoppingListService.getShoppingList());

    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.emitShoppingListUpdated.subscribe(
      (shoppingListUpdated: ShoppingListItem[]) => {
        // console.log('subscribe: ', shoppingListUpdated);
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

  onUpdateItemAmount(shoppingItem: ShoppingListItem, amount: number) {
    if (amount > 0) {
      shoppingItem.amount = amount;
    } else {
      // this.removeItemFromShoppingList(shoppingItem.id);
      this.shoppingListService.removeItemFromShoppingList(shoppingItem);
    }
  }

  onClearList() {
    this.shoppingListService.onCleanList();
  }

  ngAfterContentInit() {
    // console.log('1: ', this.elRef);
  }

  ngAfterViewInit() {
    // console.log('2: ', this.elRef);
  }
}
