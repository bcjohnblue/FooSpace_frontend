import { combineReducers } from 'redux';
import productReducers from './modules/product/reducers';

export default combineReducers({
  product: productReducers
});
