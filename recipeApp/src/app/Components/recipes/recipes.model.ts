export class Recipe {
  name: string;
  description: string;
  image: string;
  link: string;

  constructor(name: string, description: string, image: string, link: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}
