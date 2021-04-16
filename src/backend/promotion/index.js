import SecondItem50PercentOff from './SecondItem50PercentOff';
import MoreThen3ItemDiscount$5 from './MoreThen3ItemDiscount$5';

const applyPromotionMethods = [SecondItem50PercentOff, MoreThen3ItemDiscount$5];

const promotion = (products) => {
  let result = products;
  for (const applyPromotionMethod of applyPromotionMethods) {
    result = applyPromotionMethod(result);
  }

  return result;
};

export default promotion;
