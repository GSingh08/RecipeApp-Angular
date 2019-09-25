import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-info",
  templateUrl: "./recipe-info.component.html",
  styleUrls: ["./recipe-info.component.css"]
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  constructor() {}

  ngOnInit() {}
}
