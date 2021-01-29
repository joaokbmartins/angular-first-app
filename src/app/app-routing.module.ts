import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeManagerComponent } from './components/recipe/recipe-manager/recipe-manager.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { WarningPageComponent } from './shared/components/warning-page/warning-page.component';
import { UrlIdGuard } from './shared/services/url-id-guard.service';

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
        canActivate: [UrlIdGuard],
      },
      {
        path: 'manager/:id',
        component: RecipeManagerComponent,
        canActivate: [UrlIdGuard],
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
    data: { 'warning-message': '404 - Page not found.' },
  },
  {
    path: '**',
    redirectTo: '/warning-page',
    data: { 'warning-message': '404 - Page not found.' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
