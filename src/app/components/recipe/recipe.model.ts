import { ThrowStmt } from '@angular/compiler';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export class Recipe {

  private name: string = null;
  private description: string =null;
  private imagePath: string = null;
  private ingredients: Array<Ingredient> = null;

  constructor(name: string, description: string, imagePath: string, ingredients:Array<Ingredient>) {
    this.setName(name);
    this.setDescription(description);
    this.setImagePath(imagePath);
    this.ingredients = ingredients;
  }

  public getName(): string{
    return this.name;
  }

  public setName(name: string): void{
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getImagePath(): string {
    return this.imagePath;
  }

  public setImagePath(imagePath:string):void {
    this.imagePath = imagePath;
  }

  public getIngredients(): Array<Ingredient> {
    return this.ingredients;
  }

  public setIngredietns(ingredients: Array<Ingredient>): void {
    this.ingredients = ingredients;
  }

}