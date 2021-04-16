import normalize from './normalize';
import caculate from './caculate';
import promotion from '../promotion';

const checkout = (productIDs = []) => {
  // Please complete your code here.
  // Product's detail can be found in `database`.
  const products = normalize(productIDs);
  const result = promotion(products);
  const totalPrice = caculate(result);

  return totalPrice;
};

export default checkout;
