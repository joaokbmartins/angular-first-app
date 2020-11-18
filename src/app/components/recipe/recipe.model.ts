export class Recipe {

  private name: string = null;
  private description: string =null;
  private imagePath: string = null;

  constructor(name: string, description: string, imagePath: string) {
     this.setName(name);
     this.setDescription(description);
     this.setImagePath(imagePath);
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

}