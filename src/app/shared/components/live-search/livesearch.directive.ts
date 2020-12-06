import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit,
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
  private isLiveSearchBodyVisible: boolean = false;

  constructor(
    private elRef: ElementRef,
    private ingredientsService: IngredientsService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.liveSearchInput = this.elRef.nativeElement.childNodes[1];
    this.liveSearchBody = this.elRef.nativeElement.childNodes[2];
    this.liveSearchBodyItems = this.liveSearchBody.childNodes;
  }

  @HostListener('keyup')
  private onKeyPress(): void {
    this.removeResultsFromList();
    var value = this.captureInputValue();
    if (!value || !value.trim()) {
      this.toggleBodyVisibility(false);
    } else {
      this.toggleBodyVisibility(true);
      var ingredients: Ingredient[] = this.searchForValueAtBase(value);
      this.appendResultToList(ingredients);
    }
  }

  captureInputValue(): string {
    return String(this.liveSearchInput.value);
  }

  searchForValueAtBase(searchValue: string): Ingredient[] {
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

  appendResultToList(ingredients: Ingredient[]): void {
    ingredients.forEach((ingItem: Ingredient) => {
      var x = this.renderer.createElement('div');
      var text = this.renderer.createText(ingItem.name);
      this.renderer.appendChild(x, text);
      this.renderer.addClass(x, 'live-search-body-item');
      this.renderer.appendChild(this.liveSearchBody, x);
    });
  }

  @HostListener('focusin')
  private onFocusIn() {
    this.toggleBodyVisibility(true);
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
