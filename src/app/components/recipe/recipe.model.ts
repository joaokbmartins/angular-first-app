import { Ingredient } from '../shopping-list/ingredient/ingredient.model';

export class Recipe {
  name: string = null;
  description: string = null;
  imagePath: string = null;
  ingredients: Array<Ingredient> = null;

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Array<Ingredient>
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
