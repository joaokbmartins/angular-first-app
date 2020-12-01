import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailGuard } from './components/recipe/recipe-detail/recipe-detail-guard.service';

import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeManagerComponent } from './components/recipe/recipe-manager/recipe-manager.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { WarningPageComponent } from './shared/components/warning-page/warning-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes/manager',
    component: RecipeManagerComponent,
  },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent,
        canActivate: [
          RecipeDetailGuard
        ]
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
