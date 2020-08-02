import React, { useState } from 'react';
import styled from 'styled-components';
import MasonryProducts from '../../components/MasonryProducts';
import CategoryHeader from '../../components/CategoryHeader/';
import { ScrollView } from 'react-native';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const HomeScreenPresenter = ({
  currentTab,
  handleCategoryChange,
  featuredProducts,
  bestSellingProducts,
}) => {
  return (
    <Container>
      <CategoryHeader
        currentTab={currentTab}
        handleCategoryChange={handleCategoryChange}
      />
      <ScrollView>
        <MasonryProducts
          products={featuredProducts}
          heading="Featured Products"
        />
        <MasonryProducts
          products={bestSellingProducts}
          heading="Best Selling"
        />
      </ScrollView>
    </Container>
  );
};

export default HomeScreenPresenter;
