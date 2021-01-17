import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RecipesService } from 'src/app/components/recipe/recipes.service';
import { IngredientListItem } from 'src/app/components/shopping-list/ingredient/ingredient-list-item.model';
import { Ingredient } from 'src/app/components/shopping-list/ingredient/ingredient.model';
import { IngredientsService } from 'src/app/components/shopping-list/ingredient/ingredients.service';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent {


  @ViewChild("liveSearchInput") liveSearchInput: ElementRef<HTMLInputElement>;
  @ViewChild("liveSearchAddButton") liveSearchAddButton: ElementRef<HTMLButtonElement>;
  @ViewChild("liveSearchBody") liveSearchBody: ElementRef<HTMLDivElement>;

  selectedItem: Ingredient = new Ingredient(1, 'a');
  foundItems: IngredientListItem[] = <IngredientListItem[]>[];

  constructor(
    private renderer: Renderer2,
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService
  ) { }

  onSearchItem() {
    let searchValue: string = this.liveSearchInput.nativeElement.value;
    if (!searchValue || !searchValue.trim()) {
      return;
    }
    this.foundItems = this.ingredientsService.findIngredientByName(searchValue);
    this.addLiveSearchBodyItems();
  }

  onMouseEnter() {
    // console.log("ENTER");
  }

  onMouseOut() {
    // console.log("OUT");
  }

  addLiveSearchBodyItems() {
    for (let item of this.foundItems) {
      if (!this.isItemOnList(item.ingredient.id)) {
        let div: HTMLDivElement = this.createLiveSearchBodyItem(item);
        this.renderer.appendChild(this.liveSearchBody.nativeElement, div);
      }
    }
  }

  isItemOnList(ingredientId: number): boolean {
    let itemIsPreset: boolean = false;
    this.foundItems.find((item) => {
      if (item.ingredient.id == ingredientId) {
        itemIsPreset = true;
        console.log('n');
        
      }
    })
    return itemIsPreset;
  }

  createLiveSearchBodyItem(ingredientListItem: IngredientListItem): HTMLDivElement {
    let div: HTMLDivElement = this.renderer.createElement("div");
    let divContent = this.renderer.createText(ingredientListItem.ingredient.name);
    this.renderer.setAttribute(div, "id", ingredientListItem.ingredient.id.toString());
    this.renderer.addClass(div, "live-search-body-item");
    this.renderer.appendChild(div, divContent);
    return div;
  }


}