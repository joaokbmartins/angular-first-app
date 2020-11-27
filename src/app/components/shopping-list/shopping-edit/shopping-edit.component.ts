import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component ({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {
 
  alertMessage: string = null;

  @ViewChild('inputName', { static: true })
  private inputName: ElementRef = null;
  
  @ViewChild('inputAmount', { static: true }) 
  private inputAmount: ElementRef = null;

  constructor(
    private shoppingListService:ShoppingListService
  ) { }
  
  ngDoCheck() { 
    this.alertMessage = this.shoppingListService.alertMessage;
  }

  public onClearList(): void {
    this.shoppingListService.onCleanList();
  }

  public onAddIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value
    const ingredientAmount:number = this.inputAmount.nativeElement.value;
    this.shoppingListService.addNewIngredient(new Ingredient(ingredientName, ingredientAmount));
  }

  public onDeleteIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value
    const ingredientAmount:number = this.inputAmount.nativeElement.value;
    this.shoppingListService.deleteIngredient(new Ingredient(ingredientName, ingredientAmount));
  } 
    
}