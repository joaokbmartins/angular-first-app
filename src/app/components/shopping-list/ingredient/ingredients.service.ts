import { EventEmitter, Injectable, Output } from '@angular/core';
import { IngredientListItem } from './ingredient-list-item.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  // private ingredientList: IngredientListItem[] = <IngredientListItem[]>[];
  private ingredientList: Ingredient[] = <Ingredient[]>[];
  selectedIngredient: Ingredient = null;

  @Output()
  ingredientListUpdated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() {
    // this.ingredientList.push({ ingredient: new Ingredient(0, 'rice'), amount: 2 });
    // this.ingredientList.push({ ingredient: new Ingredient(1, 'bean'), amount: 2 });
    // this.ingredientList.push({ ingredient: new Ingredient(2, 'bread'), amount: 2 });
    this.ingredientList.push(new Ingredient(0, 'rice'));
    this.ingredientList.push(new Ingredient(1, 'bean'));
    this.ingredientList.push(new Ingredient(2, 'bread'));
  }

  addIngredient(newIngredient: Ingredient): void {
    if (this.isIngredientExistent(newIngredient)) {
      console.log('item presente');
    } else {
      newIngredient.id = this.nextIngredientId();
      this.ingredientList.push(newIngredient);
    }
  }

  isIngredientExistent(ingredient: Ingredient): boolean {
    let isOnList: boolean = false;
    this.ingredientList.find((item: Ingredient) => {
      if (item.name === ingredient.name) {
        console.log("TRUE");
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
