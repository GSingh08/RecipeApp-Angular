import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { CreateComponent } from "./components/create/create.component";
import { RecipeInfoComponent } from './components/recipes/recipe-info/recipe-info.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeListTemplateComponent } from './components/recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';

const appRouter: Routes = [
  {
    path: "", redirectTo: "recipes", pathMatch: "full"
  },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: RecipeListTemplateComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeInfoComponent },
      { path: ":id/edit", component: RecipeEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
