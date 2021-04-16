import React from 'react';
import ProductHeader from './ProductHeader';

const headerData = {
  id: 'ID',
  name: 'Product Name',
  price: 'price'
};
const ProductList: React.FC = (props) => {
  return (
    <ul>
      <ProductHeader data={headerData}></ProductHeader>
      {props.children}
    </ul>
  );
};

export default ProductList;
