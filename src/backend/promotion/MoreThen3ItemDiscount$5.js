const PROMOTION_NAME = 'MoreThen3ItemDiscount$5';
const MAX_ITEM_COUNT = 3;

const applyDiscount$5 = (products) => {
  return products.map((product) => ({
    ...product,
    finalPrice: product.price - 5,
    promote: PROMOTION_NAME
  }));
};

const MoreThen3ItemDiscount$5 = (products) => {
  const finalProduct = [];
  const temp = [];

  products.forEach((product) => {
    if (!product.promote) {
      temp.push(product);
      if (temp.length === MAX_ITEM_COUNT) {
        finalProduct.push(...applyDiscount$5(temp));
        temp.length = 0;
      }
    } else {
      finalProduct.push(product);
    }
  });
  finalProduct.push(...temp);

  return finalProduct;
};

export default MoreThen3ItemDiscount$5;
