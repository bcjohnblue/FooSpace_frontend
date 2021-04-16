import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/index';
import type { NormalizeProduct } from '../api';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';
import { Button } from '@material-ui/core';
import store from '../store';
import type { Product } from '../types';
import checkout from '../backend/helpers/checkout';

const makeInputProducts = (products: Product[]): string[] => {
  const inputProducts: string[] = [];
  products.forEach((product) => {
    for (let index = 0; index < product.count; index++) {
      inputProducts.push(product.id);
    }
  });

  return inputProducts;
};

const ProductPage = () => {
  const [products, setProducts] = useState<NormalizeProduct[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const reponse = await getProducts();
        console.log(reponse);

        setProducts(reponse);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  const onCheckoutClick = () => {
    const inputProducts = makeInputProducts(store.getState().product.products);
    const price = checkout(inputProducts);
    setTotalPrice(price);
  };

  return (
    <>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id} data={product}></ProductItem>
        ))}
      </ProductList>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
        onClick={onCheckoutClick}
      >
        Checkout
      </Button>
      <div style={{ marginTop: '10px' }}>The total price are ${totalPrice}</div>
    </>
  );
};

export default ProductPage;
