import { Product } from '../../../types';

export const SET_PRODUCT = 'SET_PRODUCT';
export interface SetProductAction {
  type: typeof SET_PRODUCT;
  product: Product;
}

export type ProductActions = SetProductAction;
