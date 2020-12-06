import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';
import { Ingredient } from 'src/app/components/shopping-list/ingredient/ingredient.model';
import { IngredientsService } from 'src/app/components/shopping-list/ingredient/ingredients.service';

@Directive({
  selector: '[appLiveSearch]',
})
export class LiveSearchDirective {
  private foundIngredientsList: Ingredient[] = null;

  @HostBinding('class.open')
  private status = false;

  constructor(
    private elRef: ElementRef,
    private ingredientsService: IngredientsService,
    private renderer: Renderer2
  ) {}

  @HostListener('focusin')
  private onFocusIn() {
    if (this.foundIngredientsList) {
      this.status = true;
    }
  }

  @HostListener('focusout')
  private onFocusOut() {
    this.status = false;
  }

  @HostListener('keyup')
  private onKeyPress(): void {
    const searchName: string = this.elRef.nativeElement.firstChild.value;
    this.newList();
    if (!searchName || searchName.trim() == '') {
      console.log('VAZIO');
      
      this.status = false;
    } else {
      this.foundIngredientsList = this.searchIngredient(searchName);
      if (!this.foundIngredientsList || this.foundIngredientsList.length <= 0) {
        this.nothingToDisplay();
      } else {
        this.displayFoundList();
      }
    }
  }

  searchIngredient(searchName: string): Ingredient[] {
    this.status = true;
    return this.ingredientsService.findIngredientByName(searchName.trim());
  }

  nothingToDisplay() {
    var li = this.renderer.createElement('li');
    var nothingToDisplayMessage = this.renderer.createText("Nothing found");
    this.renderer.setStyle(li, 'text-align', 'center');
    this.renderer.appendChild(li, nothingToDisplayMessage);
    this.renderer.appendChild(this.elRef.nativeElement.childNodes[1], li);
  }

  displayFoundList() {
    var searchDropdown = this.elRef.nativeElement.childNodes[1];
    this.foundIngredientsList.forEach((x) => {
      const li = this.renderer.createElement('li');
      const a = this.renderer.createElement('a');
      const text = this.renderer.createText(x.name);
      this.renderer.setStyle(a, 'cursor', 'pointer');
      this.renderer.appendChild(a, text);
      this.renderer.appendChild(li, a);
      this.renderer.appendChild(searchDropdown, li);
    });
  }

  public newList(): void {
    var toRemoveChild = this.elRef.nativeElement.childNodes[1];
    var ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul, 'dropdown-menu');
    this.renderer.removeChild(this.elRef.nativeElement, toRemoveChild);
    this.renderer.appendChild(this.elRef.nativeElement, ul);
  }
}
