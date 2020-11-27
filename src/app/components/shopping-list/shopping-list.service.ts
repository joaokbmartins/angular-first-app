import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { __spreadArrays } from 'tslib';

@Injectable()
export class ShoppingListService {
   
  alertMessage: string = null;
  ingredients: Array<Ingredient> = new Array<Ingredient>();
  ingredientsChanged: EventEmitter<Array<Ingredient>> = new EventEmitter<Array<Ingredient>>();

  public addIngredientsFromRecipe(ingredients: Array<Ingredient>) {
    ingredients.forEach((recipeIngredient) => this.addNewIngredient(recipeIngredient));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addNewIngredient(ingredient: Ingredient) {
    console.log('AQOI')
    this.alertMessage = null;
    if (ingredient.getAmount() <= 0) {
      this.alertMessage = "Invalid ingredient amount.";
      return;
    }
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
    this.ingredientsChanged.emit(this.ingredients.slice());
  } 

  public deleteIngredient(toDelete: Ingredient): void {
    this.alertMessage = null;
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
      this.alertMessage = "Ingredient not found.";
    } else if (insuficientAmount) {
      this.alertMessage = "You're trying to delete more ingredients than you have on your list.";
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public onCleanList(): void {
    this.alertMessage = null;
    this.ingredients = new Array<Ingredient>();
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

}