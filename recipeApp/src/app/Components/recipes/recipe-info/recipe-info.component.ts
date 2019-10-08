import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipeService } from '../../../services/recipe.service';
import { Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: "app-recipe-info",
  templateUrl: "./recipe-info.component.html",
  styleUrls: ["./recipe-info.component.css"]
})
export class RecipeInfoComponent implements OnInit {
  recipe: Recipe;
  id: number;
  length = this.recipeService.getRecipes().length;

  @Input() recipeDetail: Recipe;
  constructor(public route: ActivatedRoute, public recipeService: RecipeService) { }

  ngOnInit() {

    //listen and get recipe from route params id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    })

    //listen n subscribe to recipe changes and update through observable 
    this.recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipe = recipe[this.id]
      }
    )
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.id)
  }

}
