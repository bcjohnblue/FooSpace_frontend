import products from '../products';
const normalizeProduct = Object.entries(products).map(([key, value]) => {
  return {
    id: key,
    ...value
  };
});

export type NormalizeProduct = typeof normalizeProduct[0];

export const getProducts = (): Promise<NormalizeProduct[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(normalizeProduct);
    }, 100);
  });
};
