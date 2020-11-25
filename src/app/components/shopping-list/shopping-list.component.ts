import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {

  private ingredients: Array<Ingredient> = new Array<Ingredient>();

  @Input()
  private alertMessage: string = null;

  constructor() { }
  
  public onCleanList(): void {
    this.ingredients = new Array<Ingredient>();
  }

  public addNewIngredient(ingredient:Ingredient) {
    var existent = false;
    var found = null;
    this.ingredients.forEach((ingredientListItem, index) => {
      if (ingredientListItem.getName() == ingredient.getName()) {
        found = this.ingredients[index];
        found.setAmount(
          (Number(found.getAmount()) + Number(ingredient.getAmount())
        ));
        existent = true;
        return;
      }    
    })  
    if (!existent) {
      this.ingredients.push(ingredient);
    }
  } 

  public deleteIngredient(toDelete: Ingredient): void {
    var existent:boolean = false;
    var insuficientAmount:boolean = false;
    this.ingredients.forEach((ingredientListItem, index) => {
      if (ingredientListItem.getName() == toDelete.getName()) {
        var found = this.ingredients[index];
        
        if (found.getAmount() > toDelete.getAmount()) {
          this.ingredients[index].setAmount(found.getAmount() - toDelete.getAmount());
        } else if (found.getAmount() == toDelete.getAmount()) {
          this.ingredients.splice(index, 1);
        } else {
          insuficientAmount = true;
        }

        existent = true;
        return;
      }    
    })  

    if (!existent) {
      this.setAlertMessage("Ingredient not found.")
    } else if (insuficientAmount) {
      this.setAlertMessage("You're trying to delete more ingredients than you have on your list.")
    }
  }

  public getIngredients():Array<Ingredient> {
    return this.ingredients;
  }

  public getAlertMessage(): string {
    return this.alertMessage;
  }

  public setAlertMessage(alertMessage: string): void {
    this.alertMessage = alertMessage;
  }

}