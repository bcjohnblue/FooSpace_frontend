const calculate = (products) => {
  return products.reduce((totalPrice, product) => {
    let price = 0;
    if (product.finalPrice !== undefined) {
      price = product.finalPrice;
    } else {
      price = product.price || 0;
    }

    return totalPrice + price;
  }, 0);
};

export default calculate;
