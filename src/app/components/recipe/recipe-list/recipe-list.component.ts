import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {

  private recipes:Array<Recipe> = new Array<Recipe>();

  @Output()
  private showDetails: EventEmitter<Recipe> = new EventEmitter<Recipe>()

  constructur() {
  }
  
  showRecipeDetais(recipe: Recipe) {
    
    this.showDetails.emit(recipe);

  }
  
  ngOnInit() {
    this.recipes.push(new Recipe("Test Recipe1", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("Test Recipe2", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("Test Recipe3", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
    this.recipes.push(new Recipe("Test Recipe4", "Test Recipe Description","https://www.everylastbite.com/wp-content/uploads/2018/07/DSC_3089.jpg"));
  }

  public getRecipes():Array<Recipe>{ 
    return this.recipes;
  }

}