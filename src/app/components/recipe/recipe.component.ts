import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onManageRecipe(): void {
    this.router.navigate(['manager'], {
      relativeTo: this.activatedRoute,
    });
  }
}
