import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

import { Ingredient } from './ingredient/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers: [
    // ShoppingListService
  ],
})
export class ShoppingListComponent implements OnInit, AfterViewInit {
  ingredients: Array<Ingredient> = new Array<Ingredient>();

  @Input()
  alertMessage: string = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    console.log("0: ", this.elRef);
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Array<Ingredient>) => {
        this.ingredients = ingredients;
      }
    );
  }
 
  ngAfterContentInit() {
    console.log("1: ", this.elRef);
  }

  ngAfterViewInit() {
    console.log("2: ", this.elRef);
  }
}
