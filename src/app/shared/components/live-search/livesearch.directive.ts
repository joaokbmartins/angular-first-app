import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/components/shopping-list/ingredient/ingredient.model';
import { IngredientsService } from 'src/app/components/shopping-list/ingredient/ingredients.service';

@Directive({
  selector: '[appLiveSearch]',
})
export class LiveSearchDirective implements OnInit {
  private liveSearchInput = null;
  private liveSearchBody = null;
  private liveSearchBodyItems = null;

  constructor(
    private elRef: ElementRef,
    private ingredientsService: IngredientsService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.liveSearchInput = this.elRef.nativeElement.childNodes[1];
    this.liveSearchBody = this.elRef.nativeElement.childNodes[2];
    this.liveSearchBodyItems = this.liveSearchBody.childNodes;
    this.toggleBodyVisibility(false);
  }

  @HostListener('keyup')
  private onKeyPress(): void {
    this.removeResultsFromList();
    var value = this.captureInputValue();
    if (!value || !value.trim()) {
      this.toggleBodyVisibility(false);
    } else {
      var ingredients: Ingredient[] = this.searchForValue(value.trim());
      this.toggleBodyVisibility(true);
      if (ingredients.length > 0) {
        this.onSearchReturnsContent(ingredients);
      } else {
        this.onSearchReturnNothing();
      }
    }
  }

  captureInputValue(): string {
    return String(this.liveSearchInput.value);
  }

  searchForValue(searchValue: string): Ingredient[] {
    return this.ingredientsService.findIngredientByName(searchValue.trim());
  }

  removeResultsFromList() {
    for (let x = this.liveSearchBodyItems.length - 1; x >= 0; x--) {
      this.renderer.removeChild(
        this.liveSearchBody,
        this.liveSearchBodyItems[x]
      );
    }
  }

  addLiveSearchBodyItem(textToDisplay: string, isClickable?: boolean): void {
    var liveSearchBodyItem = this.renderer.createElement('div');
    var text = this.renderer.createText(textToDisplay);
    this.renderer.appendChild(liveSearchBodyItem, text);
    this.renderer.addClass(liveSearchBodyItem, 'live-search-body-item');
    this.renderer.appendChild(this.liveSearchBody, liveSearchBodyItem);
  }

  onSearchReturnsContent(ingredients: Ingredient[]) {
    ingredients.forEach((ingItem: Ingredient) => {
      this.addLiveSearchBodyItem(ingItem.name.trim());
    });
  }

  onSearchReturnNothing() {
    this.addLiveSearchBodyItem('Search not found.', false);
  }

  @HostListener('focusin')
  private onFocusIn() {
    if (this.liveSearchInput.value) {
      this.toggleBodyVisibility(true);
    }
  }

  @HostListener('focusout')
  private onFocusOut() {
    this.toggleBodyVisibility(false);
  }

  toggleBodyVisibility(visibility: boolean): void {
    this.renderer.setStyle(
      this.liveSearchBody,
      'visibility',
      visibility ? 'visible' : 'hidden'
    );
  }
}
