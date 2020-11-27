import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers: [
    // ShoppingListService
  ]
})

export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = new Array<Ingredient>();

  @Input()
  alertMessage: string = null;

  constructor(
    private shoppingListService: ShoppingListService
  ) { } 

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Array<Ingredient>) => {
        this.ingredients = ingredients;
      }
    );
  }
  
}