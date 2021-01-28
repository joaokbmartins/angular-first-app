import { BaseProduct } from 'src/app/shared/classes/base-product.model';

export class ShoppingListProduct<T extends BaseProduct> {
  id: number;
  product: T;
  amount: number;
}
