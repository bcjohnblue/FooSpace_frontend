import React from 'react';
import styled from 'styled-components';
import type { NormalizeProduct } from '../api';

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

type HeaderData = {
  [key in keyof NormalizeProduct]: string;
};

type Props = {
  data: HeaderData;
};

const ProductHeader: React.FC<Props> = (props) => {
  return (
    <>
      <Styled.Container>
        <Styled.Item>{props.data.id}</Styled.Item>
        <Styled.Item>{props.data.name}</Styled.Item>
        <Styled.Item>{props.data.price}</Styled.Item>
        <Styled.Item>Choose</Styled.Item>
      </Styled.Container>
    </>
  );
};

export default ProductHeader;
