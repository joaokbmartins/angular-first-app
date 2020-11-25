import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component ({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {

  @ViewChild('inputName', { static: true })
  private inputName: ElementRef = null;
  
  @ViewChild('inputAmount', { static: true }) 
  private inputAmount: ElementRef = null;

  @Output()
  private addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  public onAddIngredient() {
    const ingredientName: string = this.inputName.nativeElement.value
    const ingredientAmount:number = this.inputAmount.nativeElement.value;
    this.addIngredient.emit(new Ingredient(ingredientName, ingredientAmount));
  }
    
}