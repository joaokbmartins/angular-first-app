import {
  Component,
  ElementRef,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

import { RecipesService } from 'src/app/components/recipe/recipes.service';
import { Ingredient } from 'src/app/components/shopping-list/ingredient/ingredient.model';
import { IngredientsService } from 'src/app/components/shopping-list/ingredient/ingredients.service';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css'],
})
export class LiveSearchComponent {
  @Input() id: number;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() haveInitialAmount: boolean = false;
  @Output('itemSelected')
  emitLiveSearchItemSelected: Subject<Ingredient> = new Subject<Ingredient>();
  @ViewChild('liveSearchInput') liveSearchInput: ElementRef<HTMLInputElement>;
  @ViewChild('liveSearchBody') liveSearchBody: ElementRef<HTMLDivElement>;

  foundItems: Ingredient[] = null;
  selectedItem: Ingredient = null;

  constructor(
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService
  ) {
    this.label = 'Search';
    this.placeholder = 'Search item';
  }

  onSearchItem(event: KeyboardEvent) {
    let searchValue: string = this.liveSearchInput.nativeElement.value;
    if (!searchValue || !searchValue.trim()) {
      this.unsetFoundItems();
      return;
    }
    this.foundItems = this.ingredientsService.findIngredientByName(
      searchValue.trim().toLowerCase()
    );
  }

  isItemOnList(ingredientId: number): boolean {
    let itemIsPreset: boolean = false;
    this.foundItems.find((item) => {
      if (item.id == ingredientId) {
        itemIsPreset = true;
      }
    });
    return itemIsPreset;
  }

  onClickLiveSearchItem(event: MouseEvent) {
    let div: HTMLDivElement = <HTMLDivElement>event.target;
    this.selectedItem = new Ingredient(+div.id, div.innerHTML.trim());
    this.unsetFoundItems();
  }

  onSelectIngredient() {
    if (this.selectedItem) {
      this.emitLiveSearchItemSelected.next(this.selectedItem);
      this.removeSelection();
    }
  }

  removeSelection() {
    this.selectedItem = null;
  }

  unsetFoundItems() {
    this.foundItems = null;
  }
}
