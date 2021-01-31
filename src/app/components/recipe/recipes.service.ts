import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Recipe } from 'src/app/components/recipe/recipe.model';
import { Ingredient } from '../shopping-list/ingredient/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipeList: Recipe[] = <Recipe[]>[];
  private eventNextReplaySubject: ReplaySubject<Recipe[]> = new ReplaySubject<
    Recipe[]
  >();
  subscriberNewReplaySubject = this.eventNextReplaySubject.asObservable();

  constructor() {
    this.recipeList.push(
      new Recipe(
        0,
        'BATATA CRISPY',
        'A simple, healthier Recipe for Lebanese Spicy Potatoes!',
        'https://www.restaurantnews.com/wp-content/uploads/2017/05/Hickory-Tavern-Tavern-Burger.jpg',
        [
          { id: 1, product: new Ingredient(3, 'BATATA'), amount: 2 },
          { id: 4, product: new Ingredient(3, 'COCA'), amount: 2 },
        ]
      ),
      new Recipe(
        1,
        'DORITOS',
        'Doritos com Coca Cola!',
        'https://i2.wp.com/media.globalnews.ca/videostatic/352/947/FINAL-5HEALTHYFOODS.jpg?w=1040&quality=70&strip=all',
        [
          { id: 3, product: new Ingredient(4, 'DORITOS'), amount: 2 },
          { id: 4, product: new Ingredient(2, 'COCA'), amount: 2 },
        ]
      ),
      new Recipe(
        2,
        'CEBOLITOS',
        'Cebolitos com Coca Cola!',
        'https://previews.123rf.com/images/handmadepictures/handmadepictures1610/handmadepictures161000643/64554293-fish-sticks-on-a-sandwich-close-up-shot-selective-focus-.jpg',
        [
          { id: 5, product: new Ingredient(5, 'CEBOLITOS'), amount: 1 },
          { id: 4, product: new Ingredient(0, 'COCA'), amount: 2 },
        ]
      )
    );
  }

  getRecipeList(): Recipe[] {
    return this.recipeList.slice();
  }

  onEmitRecipeListUpdated(): void {
    this.eventNextReplaySubject.next(this.getRecipeList());
  }

  getRecipeById(id: number): Recipe {
    return this.recipeList.find((recipe: Recipe) => {
      return recipe.id == id;
    });
  }

  getNextId(): number {
    if (this.recipeList.length > 0) {
      return this.recipeList[this.recipeList.length - 1].id + 1;
    }
    return 0;
  }

  isRecipeOnList(recipe: Recipe): boolean {
    let recipeFoundOnList: boolean = false;
    this.recipeList.find((item) => {
      if (item.name == recipe.name) {
        recipeFoundOnList = true;
      }
    });
    return recipeFoundOnList;
  }

  saveRecipe(newRecipe: Recipe): boolean {
    if (!this.isRecipeOnList(newRecipe)) {
      newRecipe.id = this.getNextId();
      this.recipeList.push(newRecipe);
      this.onEmitRecipeListUpdated();
      return true;
    }
    return false;
  }

  updateRecipe(recipe: Recipe): boolean {
    let index = this.recipeList.findIndex((item) => {
      return item.id === recipe.id;
    });
    if (index === recipe.id) {
      this.recipeList[index] = recipe;
      this.onEmitRecipeListUpdated();
      return true;
    }
    return false;
  }
}
