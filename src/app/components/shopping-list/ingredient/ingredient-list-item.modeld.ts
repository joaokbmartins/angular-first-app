import { Ingredient } from './ingredient.model';

export class IngredientListItem  {
  ingredient: Ingredient;
  amount: number;
  constructor(ingredient: Ingredient, amount: number) {
    this.ingredient = ingredient;
    this.amount = amount;
  }
}
