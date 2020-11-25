import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {

  private ingredients: Array<Ingredient> = new Array<Ingredient>();

  constructor() {}

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
    var existent = false;
    var found = null;
    this.ingredients.forEach((ingredientListItem, index) => {
      if (ingredientListItem.getName() == toDelete.getName()) {
        found = this.ingredients[index];
        
        found.setAmount(
          (Number(found.getAmount()) + Number(toDelete.getAmount())
        ));
        existent = true;
        return;
      }    
    })  
    if (!existent) {
      this.ingredients.push(toDelete);
    }
  }

  public getIngredients():Array<Ingredient> {
    return this.ingredients;
  }

}