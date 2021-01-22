import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from 'src/app/components/recipe/recipe.model';
import { Ingredient } from '../shopping-list/ingredient/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipeList: Array<Recipe> = new Array<Recipe>();

  private onRecipeListUpdate: EventEmitter<Array<Recipe>> = new EventEmitter<
    Array<Recipe>
  >();

  constructor(private shoppingListService: ShoppingListService) {
    this.recipeList.push(
      new Recipe(
        0,
        'BATATA CRISPY',
        'A simple, healthier Recipe for Lebanese Spicy Potatoes!',
        'https://www.restaurantnews.com/wp-content/uploads/2017/05/Hickory-Tavern-Tavern-Burger.jpg',
        [
          { ingredient: new Ingredient(3, 'BATATA'), amount: 2 },
          { ingredient: new Ingredient(3, 'BATATA'), amount: 2 },
        ]
      ),
      new Recipe(
        1,
        'DORITOS',
        'Doritos com Coca Cola!',
        'https://i2.wp.com/media.globalnews.ca/videostatic/352/947/FINAL-5HEALTHYFOODS.jpg?w=1040&quality=70&strip=all',
        [
          { ingredient: new Ingredient(4, 'DORITOS'), amount: 2 },
          { ingredient: new Ingredient(2, 'COCA'), amount: 2 }
        ]
      ),
      new Recipe(
        2,
        'CEBOLITOS',
        'Cebolitos com Coca Cola!',
        'https://previews.123rf.com/images/handmadepictures/handmadepictures1610/handmadepictures161000643/64554293-fish-sticks-on-a-sandwich-close-up-shot-selective-focus-.jpg',
        [
          { ingredient: new Ingredient(5, 'CEBOLITOS'), amount: 1 },
          { ingredient: new Ingredient(0, 'COCA'), amount: 2 }
        ],
      )
    );
  }

  addToShoppingList(ingredients: Map<Ingredient, number>): void {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }

  getRecipes(): Array<Recipe> {
    return this.recipeList.slice();
  }

  getRecipeById(id: number): Recipe {
    id = Number(id);
    const recipe: Recipe = this.recipeList.find((recipeItem: Recipe) => {
      return recipeItem.id === id;
    });
    return recipe;
  }

  getNextId(): number {
    console.log("getNextId: ");
    return this.recipeList[this.recipeList.length - 1].id;
  }

  isRecipeOnList(recipe: Recipe): boolean {
    console.log('a');

    this.recipeList.forEach(item => {
      console.log(item, ' ', recipe);
      if (item.name == recipe.name) {
        console.log('FOUND');
        return true;
      }
    });
    return false;
  }

  saveRecipe(recipe: Recipe): void {
    this.isRecipeOnList(recipe);
    if (this.isRecipeOnList(recipe)) {
      return;
    }
    recipe.id = this.getNextId();
    this.onRecipeListUpdate.emit(this.recipeList.slice());
  }
}
