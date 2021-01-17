import { EventEmitter, Injectable, Output } from '@angular/core';
import { IngredientListItem } from './ingredient-list-item.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private ingredientList: IngredientListItem[] = <IngredientListItem[]>[];
  selectedIngredient: Ingredient = null;

  @Output()
  ingredientListUpdated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() {
    this.ingredientList.push({ ingredient: new Ingredient(0, 'rice'), amount: 2 });
    this.ingredientList.push({ ingredient: new Ingredient(1, 'bean'), amount: 2 });
    this.ingredientList.push({ ingredient: new Ingredient(2, 'bread'), amount: 2 });
  }

  addIngredient(newIngredient: Ingredient): void {
    if (this.isIngredientOnList(newIngredient)) {
      console.log('item presente');
    } else {
      newIngredient.id = this.nextIngredientId();
      this.ingredientList.push({ ingredient: newIngredient, amount: 1 });
    }
  }

  isIngredientOnList(ingredient: Ingredient): boolean {
    let isOnList: boolean = false;
    this.ingredientList.find((ingredientListItem: IngredientListItem) => {
      let item: Ingredient = ingredientListItem.ingredient;
      console.log(item.name);
      if (item.name === ingredient.name) {
        console.log("TRUE");
        isOnList = true;
        return;
      }
    });  
    return isOnList;
  }

  findIngredientByName(name: string): IngredientListItem[] {
    return this.ingredientList.filter((ingredientListItem: IngredientListItem) => {
      let ingredient: Ingredient = ingredientListItem.ingredient;
      if (ingredient.name.includes(name)) {
        return ingredientListItem;
      }
    });
  }

  nextIngredientId(): number {
    return +this.ingredientList[this.ingredientList.length - 1].ingredient.id + 1;
  }

  getIngredientList(): IngredientListItem[] {
    return this.ingredientList;
  }
}
