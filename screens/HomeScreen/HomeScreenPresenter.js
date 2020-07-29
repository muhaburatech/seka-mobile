import React from 'react';
import styled from 'styled-components';
import { products } from '../../dummy';
import MasonryProducts from '../../components/MasonryProducts';
import CategoryHeader from '../../components/CategoryHeader/';
import { ScrollView } from 'react-native';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const HomeScreenPresenter = ({ currentTab, handleCategoryChange }) => (
  <Container>
    <CategoryHeader
      currentTab={currentTab}
      handleCategoryChange={handleCategoryChange}
    />
    <ScrollView>
      <MasonryProducts products={products} heading="Popular Products" />
      <MasonryProducts products={products} heading="Best Selling" />
      <MasonryProducts products={products} heading="Featured Products" />
    </ScrollView>
  </Container>
);

export default HomeScreenPresenter;
