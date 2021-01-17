import { EventEmitter, Injectable } from '@angular/core';

import { __spreadArrays } from 'tslib';
import { Ingredient } from './ingredient/ingredient.model';

@Injectable()
export class ShoppingListService {
   
  alertMessage: string = null;
  ingredients: Map<Ingredient, number> = new Map<Ingredient, number>();
  ingredientsChanged: EventEmitter<Array<Ingredient>> = new EventEmitter<Array<Ingredient>>();

  public addIngredientsFromRecipe(ingredients: Map<Ingredient, number>) {
    // ingredients.forEach((recipeIngredient) => this.addNewIngredient(recipeIngredient));
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addNewIngredient(ingredient: Ingredient) {
    // console.log('AQOI')
    // this.alertMessage = null;
    // if (ingredient.amount <= 0) {
    //   this.alertMessage = "Invalid ingredient amount.";
    //   return;
    // }
    // var existent = false;
    // var found = null;
    // this.ingredients.forEach((ingredientListItem, index) => {
    //   if (ingredientListItem.name == ingredient.name) {
    //     found = this.ingredients[index];
    //     found.amount = ((
    //       Number(found.amount) +
    //       Number(ingredient.amount)
    //     ));
    //     existent = true;
    //     return;
    //   }    
    // })  
    // if (!existent) {
    //   this.ingredients.push(ingredient);
    // }
    // this.ingredientsChanged.emit(this.ingredients.slice());
  } 

  public deleteIngredient(toDelete: Ingredient): void {
    // this.alertMessage = null;
    // var existent:boolean = false;
    // var insuficientAmount:boolean = false;
    // this.ingredients.forEach((ingredientListItem, index) => {
    //   if (ingredientListItem.name == toDelete.name) {
    //     var found = this.ingredients[index];
        
    //     if (found.amount > toDelete.amount) {
    //       this.ingredients[index].amount = (found.amount - toDelete.amount);
    //     } else if (found.amount == toDelete.amount) {
    //       this.ingredients.splice(index, 1);
    //     } else {
    //       insuficientAmount = true;
    //     }

    //     existent = true;
    //     return;
    //   }    
    // })  

    // if (!existent) {
    //   this.alertMessage = "Ingredient not found.";
    // } else if (insuficientAmount) {
    //   this.alertMessage = "You're trying to delete more ingredients than you have on your list.";
    // }
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public onCleanList(): void {
    // this.alertMessage = null;
    // this.ingredients = new Array<Ingredient>();
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(): Array<Ingredient> {
    // return this.ingredients.slice();
    return null;
  }

}