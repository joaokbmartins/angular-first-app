import { Component } from '@angular/core';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent {
  constructor(private ingredientService: IngredientsService) {}

  test() {
    console.log(this.ingredientService.findIngredientByName('b'));
  }

  test2() {
    this.ingredientService.addIngredient({ id: 1, name: 'batata' });
  }
}
