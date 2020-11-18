import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {

  private collapsed:boolean = true;

  public getCollapsed():boolean {
    return this.collapsed;
  }

  public setCollpsed(collapsed:boolean):void {
    this.collapsed = collapsed;
  }

}