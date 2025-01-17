import { Model } from 'mongoose';

export type IVariant = {
  type: string;
  value: string;
};

export type IInventory = {
  quantity: number;
  inStock: boolean;
};

export type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: IInventory;
};

export interface ProductModel extends Model<IProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExists(productId: string): Promise<IProduct | null>;
}
