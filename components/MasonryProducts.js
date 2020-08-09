import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Column = styled.View`
  margin: 4px;
`;

const ScrollView = styled.ScrollView``;

const MasonryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const splitArray = (arr) => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const MasonryProducts = ({ products, children = null }) => (
  <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 20,
      paddingVertical: 15,
    }}
  >
    {children}
    <MasonryContainer>
      <Column>
        {splitArray(products).secondHalf.map((product) => (
          <ProductCard product={product} />
        ))}
      </Column>
      <Column>
        {splitArray(products).firstHalf.map((product) => (
          <ProductCard product={product} />
        ))}
      </Column>
    </MasonryContainer>
  </ScrollView>
);

MasonryProducts.propTypes = {
  products: PropTypes.instanceOf(Array),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MasonryProducts;
