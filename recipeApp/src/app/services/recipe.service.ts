import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../components/ingredients/ingredient.model';
import { Recipe } from '../components/recipes/recipes.model';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  recipes: Recipe[] = [
    new Recipe(
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]
    ),
    new Recipe(
      'Taco Meat Recipe',
      'Taco with minced beef and onion',
      'http://cdn.skim.gs/images/efdcvsbnlily8s1damfz/taco-meat-leftovers-recipes',
      [new Ingredient('Minced Beef', 2), new Ingredient('onions', 2)]
    ),
    new Recipe(
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      'http://cdn.skim.gs/images/v1/msi/ivenjnophdgmridughl3/dinner-recipes-under-300-calories',
      [new Ingredient('Eggs', 6), new Ingredient('Wraps', 2), new Ingredient('Cheese', 1)]
    ),
  ]

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  //gets all the recipes
  getRecipes() {
    return this.recipes.slice()
  }

  //removes the recipes
  removeRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  //get recipe by its ID
  getRecipe(index: number) {
    return this.recipes[index]
  }

  //add a new recipe
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  //update recipe
  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
