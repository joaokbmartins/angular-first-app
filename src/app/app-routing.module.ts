import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { WarningPageComponent } from './shared/components/warning-page/warning-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RecipeComponent,
  },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'warning-page',
    component: WarningPageComponent,
  },
  {
    path: '**',
    redirectTo: '/warning-page',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
