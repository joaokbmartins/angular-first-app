export class Ingredient {
 
  constructor(private name: string, private amount: number) {
    // this.setName(name);
    // this.setAmount(amount);
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void { 
    this.name = name;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }
  
}