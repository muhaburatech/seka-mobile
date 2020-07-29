import React from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SearchResults = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const Column = styled.View``;

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

const SearchScreenPresenter = ({ products }) => (
  <Container>
    <SearchResults>{`${products.length} Search Results`}</SearchResults>
    <MasonryContainer>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <MasonryContainer>
          <Column>
            {splitArray(products).firstHalf.map((product) => (
              <ProductCard
                imgSrc={product.uri}
                price={product.price}
                name={product.name}
                key={product.name}
              />
            ))}
          </Column>
          <Column>
            {splitArray(products).secondHalf.map((product) => (
              <ProductCard
                imgSrc={product.uri}
                price={product.price}
                name={product.name}
                key={product.name}
              />
            ))}
          </Column>
        </MasonryContainer>
      </ScrollView>
    </MasonryContainer>
  </Container>
);

export default SearchScreenPresenter;
