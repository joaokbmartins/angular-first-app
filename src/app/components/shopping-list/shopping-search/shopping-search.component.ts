import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IngredientListItem } from '../ingredient/ingredient-list-item.model';

import { Ingredient } from '../ingredient/ingredient.model';
import { IngredientsService } from '../ingredient/ingredients.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrls: ['shopping-search.component.css'],
})
export class ShoppingSearchComponent {
  alertMessage: string = null;

  ingredientSelected: IngredientListItem = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private ingredientsService: IngredientsService,
    private renderer: Renderer2
  ) {}

  // ngDoCheck() {
  //   this.alertMessage = this.shoppingListService.alertMessage;
  // }

  public onClearList(): void {
    this.shoppingListService.onCleanList();
  }

  public onAddSelectedIngredient(ingredient: Ingredient): void {
    this.shoppingListService.addItemToShoppingList(ingredient);
  }

  public onDeleteIngredient(): void {
    // const ingredientName: string = this.inputName.nativeElement.value;
    // const ingredientAmount: number = this.inputAmount.nativeElement.value;
    // const ingredientId: number = this.ingredientsService.nextIngredientId();
    // this.shoppingListService.addNewIngredient(
    //   new Ingredient(ingredientId, ingredientName)
    // );
  }
}
