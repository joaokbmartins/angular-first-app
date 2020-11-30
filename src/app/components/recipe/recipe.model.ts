import { Ingredient } from '../shopping-list/ingredient/ingredient.model';

export class Recipe {
  id: number = 0;
  name: string = null;
  description: string = null;
  imagePath: string = null;
  ingredients: Array<Ingredient> = null;

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredients: Array<Ingredient>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
