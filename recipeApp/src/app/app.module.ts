import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { CreateComponent } from "./components/create/create.component";
import { RecipeItemComponent } from "./components/recipes/recipe-item/recipe-item.component";
import { RecipeInfoComponent } from "./components/recipes/recipe-info/recipe-info.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    CreateComponent,
    RecipeItemComponent,
    RecipeInfoComponent,
    RecipeListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
