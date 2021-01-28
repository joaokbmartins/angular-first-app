import { BaseProduct } from 'src/app/shared/classes/base-product.model';

export class Ingredient extends BaseProduct {
  constructor(id: number, name: string) {
    super(id, name);
  }
}
