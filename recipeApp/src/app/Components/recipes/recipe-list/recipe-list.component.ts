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
      "Scrambled Eggs",
      "Simple and Easy Recipe",
      "https://toriavey.com/images/2014/06/How-to-Scramble-Eggs.jpg",
      "Link"
    ),
    new Recipe(
      "Bacon",
      "Who doesn't like bacon?",
      "https://www.simplyrecipes.com/wp-content/uploads/2019/08/baked-bacon-Lead-1.jpg",
      "Link"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
