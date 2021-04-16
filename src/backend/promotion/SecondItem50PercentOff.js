import { groupBy } from '../utils';

const PROMOTION_NAME = 'SecondItem50PercentOff';

const applySecondItem50PercentOff = (product) => (
  isPromote,
  is50PercentOffItem
) => {
  if (isPromote) {
    product.promote = PROMOTION_NAME;
    product.finalPrice = product.price;
  }
  if (is50PercentOffItem) {
    product.finalPrice = product.price / 2;
  }

  return product;
};

const SecondItem50PercentOff = (products) => {
  const groupProducts = groupBy(products, 'productID');

  const result = Object.values(groupProducts).map((groupProduct) => {
    const maxPromoteIndex = Math.floor(groupProduct.length / 2) * 2 - 1;
    const promoteIndex = groupProduct.length >= 2 ? maxPromoteIndex : -1;

    return groupProduct.map((product, index) => {
      const isPromote = index <= promoteIndex;
      const is50PercentOffItem = index % 2 === 1;

      return applySecondItem50PercentOff(product)(
        isPromote,
        is50PercentOffItem
      );
    });
  });

  return result.flat();
};

export default SecondItem50PercentOff;
