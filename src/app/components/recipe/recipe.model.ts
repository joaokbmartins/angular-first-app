import { IngredientListItem } from '../shopping-list/ingredient/ingredient-list-item.model';

 

export class Recipe {
  id: number = 0;
  name: string = null;
  description: string = null;
  imagePath: string = null;
  ingredientList: IngredientListItem[] = null;

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredientList: IngredientListItem[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredientList = ingredientList;
  }
}
