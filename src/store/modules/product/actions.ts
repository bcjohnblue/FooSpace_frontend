import * as actionTypes from './actionTypes';
import { Product } from '../../../types';

export function setProducts(product: Product): actionTypes.SetProductAction {
  return {
    type: actionTypes.SET_PRODUCT,
    product
  };
}
