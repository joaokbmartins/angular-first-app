import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: 'recipe-manager.component.html'
})
export class RecipeManagerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('RECIPES MANAGER');
    
  }

}