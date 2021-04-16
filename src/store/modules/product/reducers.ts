import * as actionTypes from './actionTypes';
import { Product } from '../../../types';

export interface ProductState {
  products: Product[];
}
const initialState: ProductState = {
  products: []
};

function reducers(
  state: ProductState = initialState,
  action: actionTypes.ProductActions
): ProductState {
  switch (action.type) {
    case actionTypes.SET_PRODUCT:
      const selectedProduct = state.products.find(
        (item) => item.id === action.product.id
      );

      if (selectedProduct) {
        selectedProduct.count = action.product.count;
        const remainProducts = state.products.filter(
          (item) => item.id !== action.product.id
        );
        return {
          ...state,
          products: [...remainProducts, selectedProduct]
        };
      }

      return {
        ...state,
        products: [...state.products, action.product]
      };
    default:
      return state;
  }
}

export default reducers;
