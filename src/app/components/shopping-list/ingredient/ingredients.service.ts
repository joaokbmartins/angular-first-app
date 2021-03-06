import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private ingredientList: Ingredient[] = <Ingredient[]>[];
  selectedIngredient: Ingredient = null;

  ingredientListUpdated: Subject<Ingredient> = new Subject<Ingredient>();
  constructor() {
    this.ingredientList.push(
      new Ingredient(0, 'rice'),
      new Ingredient(1, 'bean'),
      new Ingredient(2, 'bread')
    );
  }

  addIngredient(newIngredient: Ingredient): void {
    if (!this.contains(newIngredient)) {
      newIngredient.id = this.nextIngredientId();
      this.ingredientList.push(newIngredient);
    }
  }

  contains(ingredient: Ingredient): boolean {
    let isOnList: boolean = false;
    this.ingredientList.find((item: Ingredient) => {
      if (item.name === ingredient.name) {
        isOnList = true;
        return;
      }
    });
    return isOnList;
  }

  findIngredientByName(name: string): Ingredient[] {
    return this.ingredientList.filter((ingredient: Ingredient) => {
      if (ingredient.name.includes(name)) {
        return ingredient;
      }
    });
  }

  nextIngredientId(): number {
    return +this.ingredientList[this.ingredientList.length - 1].id + 1;
  }

  getIngredientList(): Ingredient[] {
    return this.ingredientList;
  }
}
