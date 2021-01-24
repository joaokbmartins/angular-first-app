import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { IngredientComponent } from './components/shopping-list/ingredient/ingredient.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component'; 
import { ToggleDropDirective } from './shared/directives/toggle-drop.directive';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { WarningPageComponent } from './shared/components/warning-page/warning-page.component';
import { RecipeManagerComponent } from './components/recipe/recipe-manager/recipe-manager.component';
import { UrlIdGuard } from './shared/services/url-id-guard.service';
import { LiveSearchComponent } from './shared/components/live-search/live-search.component'; 
import { InputSpinner } from './shared/components/input-spinner/input-spinner.component';
import { ShoppingSearchComponent } from './components/shopping-list/shopping-search/shopping-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingSearchComponent,
    IngredientComponent,
    ToggleDropDirective,
    WarningPageComponent,
    RecipeManagerComponent,
    LiveSearchComponent,
    InputSpinner,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService, UrlIdGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
