import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { Ingredient } from '../ingredient/ingredient.model';
import { IngredientsService } from '../ingredient/ingredients.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  alertMessage: string = null;

  @ViewChild('inputName', { static: true })
  private inputName: ElementRef = null;

  @ViewChild('inputAmount', { static: true })
  private inputAmount: ElementRef = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private ingredientsService: IngredientsService,
    private renderer: Renderer2,
  ) {}

  ngDoCheck() {
    this.alertMessage = this.shoppingListService.alertMessage;
  }

  public onClearList(): void {
    this.shoppingListService.onCleanList();
  }

  onClick() {
    // var x = this.renderer.selectRootElement('body');
    // console.log(x);
  }

  public onAddIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value;
    const ingredientAmount: number = this.inputAmount.nativeElement.value;
    const ingredientId: number = this.ingredientsService.nextIngredientId();
    this.shoppingListService.addNewIngredient(
      new Ingredient(ingredientId, ingredientName)
    );
  }

  public onDeleteIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value;
    const ingredientAmount: number = this.inputAmount.nativeElement.value;
    const ingredientId: number = this.ingredientsService.nextIngredientId();
    this.shoppingListService.addNewIngredient(
      new Ingredient(ingredientId, ingredientName)
    );
  }
}
