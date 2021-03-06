import { Ingredient } from '../../components/ingredients/ingredient.model';

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  link: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
