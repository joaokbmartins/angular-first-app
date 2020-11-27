import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/components/recipe/recipe.model';

@Injectable({providedIn:'root'})
export class RecipesService {

  recipes: Array<Recipe> = new Array<Recipe>();
  actualRecipe: Recipe = null;
  
  constructor() {
    this.recipes.push(new Recipe("BATATA CRISPY", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("MICÃO", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("DORITOS", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("CEBOLITOS", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
  }

  onShowDetails(recipe:Recipe) {
    this.actualRecipe = recipe;
    console.log("SERVICE: ", this.actualRecipe)
  }

}