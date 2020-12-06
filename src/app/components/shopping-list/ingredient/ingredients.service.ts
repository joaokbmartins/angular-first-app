import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private ingredientList: Array<Ingredient> = new Array<Ingredient>();

  @Output()
  ingredientListUpdated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
    this.ingredientList.push(
      new Ingredient(0, 'rice', 1),
      new Ingredient(1, 'bean', 1),
      new Ingredient(2, 'bread', 1),
    );
  }
  
  addIngredient(newIngredient: Ingredient): void {
    var found: boolean = false;
    this.ingredientList.find(
      (ingredientItem: Ingredient) => {
        if (ingredientItem.name === newIngredient.name) {
          ingredientItem.amount += newIngredient.amount;
          found = true;
        }
        return ingredientItem.name === newIngredient.name;
      }
    )
    if (!found) {
      newIngredient.id = this.nextIngredientId();
      this.ingredientList.push(newIngredient);
    }
  }

  findIngredientByName(name: string):Ingredient[] { 
    var ingredients = this.ingredientList.filter(
      (x: Ingredient) => {
        if (x.name.includes(name)) {
          return true;
        }
      }
    );
    return ingredients;
  }

  nextIngredientId():number {
    return this.ingredientList[this.ingredientList.length - 1].id + 1;
  }

  getIngredientList(): Array<Ingredient> {
    return this.ingredientList.slice();
  }
  
}