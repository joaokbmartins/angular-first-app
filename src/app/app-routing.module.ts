import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: "/recipes", pathMatch: 'full'
  },  
  {
    path: 'recipes', component: RecipeComponent
  },  
  {
    path: 'shopping-list', component: ShoppingListComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }