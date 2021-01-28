import { Ingredient } from '../shopping-list/ingredient/ingredient.model';
import { ShoppingListProduct } from '../shopping-list/shopping-list-product.interface';

export class Recipe {
  id: number = 0;
  name: string = null;
  description: string = null;
  imagePath: string = null;
  ingredientList: ShoppingListProduct<Ingredient>[] = null;

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredientList: ShoppingListProduct<Ingredient>[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredientList = ingredientList;
  }
}
