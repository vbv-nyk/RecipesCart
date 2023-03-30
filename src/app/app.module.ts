import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeItemComponent } from './recipes/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe/recipe-detail/recipe-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { CartItemEditComponent } from './shopping-cart/cart-item-edit/cart-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingCartComponent,
    CartItemComponent,
    CartItemEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
