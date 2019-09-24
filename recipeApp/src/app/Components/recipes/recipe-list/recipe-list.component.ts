import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "How to make Eggs",
      "Recipes requires eggs, salt and pepper",
      "https://toriavey.com/images/2014/06/How-to-Scramble-Eggs.jpg",
      "Link"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
