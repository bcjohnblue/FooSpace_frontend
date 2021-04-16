import products from '../../products';

const getIsProductExist = (product) => product && product.name;

const normalize = (productIDs) => {
  const selectedProducts = [];

  productIDs.forEach((productID, index) => {
    const product = products[productID];

    const isProductExist = getIsProductExist(product);
    if (isProductExist) {
      selectedProducts.push({
        id: index + 1,
        productID,
        ...product
      });
    }
  });

  return selectedProducts;
};

export default normalize;
