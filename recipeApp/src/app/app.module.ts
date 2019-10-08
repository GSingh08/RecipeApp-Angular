import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { CreateComponent } from "./components/create/create.component";
import { RecipeItemComponent } from "./components/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeInfoComponent } from "./components/recipes/recipe-info/recipe-info.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { RecipeService } from './services/recipe.service';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeListTemplateComponent } from './components/recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    CreateComponent,
    RecipeItemComponent,
    RecipeInfoComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeListTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
