import React from 'react';
import type { NormalizeProduct } from '../api';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { setProducts } from '../store/modules/product/actions';

const Styled = {
  Container: styled.div`
    display: grid;
    grid-template-columns: 50px 150px 100px 100px;
    margin-bottom: 10px;
  `,
  Item: styled.div`
    margin-right: 20px;
    display: inline;
  `
};

type Props = {
  data: NormalizeProduct;
};
const ProductItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const count = +event.target.value;
    const product = {
      id: props.data.id,
      name: props.data.name,
      count
    };

    dispatch(setProducts(product));
  };

  return (
    <Styled.Container>
      <Styled.Item>{props.data.id}</Styled.Item>
      <Styled.Item>{props.data.name}</Styled.Item>
      <Styled.Item>{props.data.price}</Styled.Item>
      <input type="number" name="number" min={0} onChange={onChange} />
    </Styled.Container>
  );
};

export default ProductItem;
