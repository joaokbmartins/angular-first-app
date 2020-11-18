import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{

  private ingredients: Array<Ingredient> = new Array<Ingredient>();

  constructor() {

  }

  ngOnInit() {
    this.ingredients.push(new Ingredient("Apple", 10));
    this.ingredients.push(new Ingredient("Eggplant", 5));
  }

  public getIngredients():Array<Ingredient> {
    return this.ingredients;
  }

}