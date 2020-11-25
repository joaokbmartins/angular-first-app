import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component ({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {

  @Input()
  private alertMessage: string = null;

  @ViewChild('inputName', { static: true })
  private inputName: ElementRef = null;
  
  @ViewChild('inputAmount', { static: true }) 
  private inputAmount: ElementRef = null;

  @Output()
  private addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output()
  private deleteIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output()
  private clearList: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  
  public onClearList(): void {
    this.clearList.emit();
  }

  public onAddIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value
    const ingredientAmount:number = this.inputAmount.nativeElement.value;
    this.addIngredient.emit(new Ingredient(ingredientName, ingredientAmount));
  }

  public onDeleteIngredient(): void {
    const ingredientName: string = this.inputName.nativeElement.value
    const ingredientAmount:number = this.inputAmount.nativeElement.value;
    this.deleteIngredient.emit(new Ingredient(ingredientName, ingredientAmount));
  }

  public getAlertMessage(): string {
    return this.alertMessage;
  }

  public setAlertMessage(alertMessage: string): void {
    this.alertMessage = alertMessage;
  }
    
}