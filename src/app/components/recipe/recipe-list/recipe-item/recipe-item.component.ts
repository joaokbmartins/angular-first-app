import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = null;

  // constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  // onShowDetails(): void {
  //   this.router.navigate([this.recipe.id], { relativeTo: this.activatedRoute });
  // }
}
