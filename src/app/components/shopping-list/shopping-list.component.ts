import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import { ShoppingListItem } from './shopping-list-item.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers: [
    // ShoppingListService
  ],
})
export class ShoppingListComponent implements OnInit, AfterViewInit {
  shoppingList: ShoppingListItem[];

  @Input()
  alertMessage: string = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.emitShoppingListUpdated.subscribe((shoppingList: ShoppingListItem[]) => {
      this.shoppingList = shoppingList;
    });
  }

  ngAfterContentInit() {
    console.log('1: ', this.elRef);
  }

  ngAfterViewInit() {
    console.log('2: ', this.elRef);
  }
}
