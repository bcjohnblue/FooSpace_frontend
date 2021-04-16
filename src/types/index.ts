import products from '../products';
const normalizeProduct = Object.entries(products).map(([key, value]) => {
  return {
    id: key,
    ...value
  };
});

export type NormalizeProduct = typeof normalizeProduct[0];

export type Product = {
  id: string;
  name: string;
  count: number;
}