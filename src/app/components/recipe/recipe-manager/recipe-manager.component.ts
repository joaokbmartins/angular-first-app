import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { TimeInterval } from 'rxjs';
import { IngredientListItem } from '../../shopping-list/ingredient/ingredient-list-item.model';
import { Ingredient } from '../../shopping-list/ingredient/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: 'recipe-manager.component.html',
  styleUrls: ['recipe-manager.component.css'],
  providers: [RecipesService],
})
export class RecipeManagerComponent implements OnInit {
  id: number = 0;
  name: string = 'TEST';
  description: string = 'TEST DESCRIPTION';
  imagePath: string = 'https://ichef.bbci.co.uk/images/ic/832xn/p08nk96t.jpg';
  toUpdateRecipe: Recipe = null;
  recipeIngredientList: IngredientListItem[] = null;
  managerOperation: string = 'Save Recipe';
  timerAmountManagement = null;
  isShowingMessage: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute // private recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.recipeIngredientList = <IngredientListItem[]>[];
    if (this.activatedRoute.params['id']) {
      console.log('RECIPES MANAGER');
      this.activatedRoute.params.subscribe((params: Params) => {
        var toUpdateRecipe = this.recipesService.getRecipeById(params['id']);
        this.id = toUpdateRecipe.id;
        this.name = toUpdateRecipe.name;
        this.description = toUpdateRecipe.description;
        this.imagePath = toUpdateRecipe.imagePath;
        this.recipeIngredientList = toUpdateRecipe.ingredientList;
      });
    }
  }

  onUpdateItemAmount(ingredientItem: IngredientListItem, amount: number) {
    if (amount > 0) {
      ingredientItem.amount = amount;
    } else {
      this.onRemoveItemFromIngredientList(ingredientItem);
    }
  }

  onManageRecipe(): void {
    switch (this.managerOperation) {
      case 'Save Recipe':
        console.log('onManageRecipe >>>>>>');
        this.onSaveRecipe();
        break;
      case 'Update Recipe':
        this.onUpdateRecipe();
        break;
    }
  }

  onSaveRecipe(): void {
    let newRecipe: Recipe = new Recipe(
      0,
      this.name,
      this.description,
      this.imagePath,
      this.recipeIngredientList
    );
    this.recipesService.saveRecipe(newRecipe);
  }

  onUpdateRecipe(): void {}

  onRemoveItemFromIngredientList(ingredientListItem: IngredientListItem): void {
    this.recipeIngredientList.splice(
      this.recipeIngredientList.indexOf(ingredientListItem),
      1
    );
  }

  showAlertMessage() {
    this.isShowingMessage = true;
    setTimeout(() => {
      this.isShowingMessage = false;
    }, 3000);
  }

  doRecipeIngredientsIncludes(ingredient: Ingredient): boolean {
    for (let item of this.recipeIngredientList) {
      if (this.equals(item.ingredient, ingredient)) {
        this.showAlertMessage();
        return true;
      }
    }
    return false;
  }

  onAddRecipeIngredient(ingredient: Ingredient) {
    if (!this.doRecipeIngredientsIncludes(ingredient)) {
      this.recipeIngredientList.push({ ingredient: ingredient, amount: 1 });
    }
  }

  private equals(item: Ingredient, item2: Ingredient): boolean {
    if (item === item2) {
      return true;
    }
    if (item.id === item2.id || item.name === item2.name) {
      return true;
    }
    return false;
  }
}
