import React from 'react';
import styled from 'styled-components';
import MasonryProducts from '../../components/MasonryProducts';
import CategoryHeader from '../../components/CategoryHeader/';
import { ScrollView, View, StyleSheet } from 'react-native';
import Block from '../../components/Block';
import theme from '../../constants/theme';
import TextCustom from '../../components/Text';

const Container = styled.View`
  background-color: white;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HomeScreenPresenter = ({
  currentTab,
  handleCategoryChange,
  featuredProducts,
  bestSellingProducts,
}) => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
        }}
      >
        <CategoryHeader
          currentTab={currentTab}
          handleCategoryChange={handleCategoryChange}
        />
      </View>
      <View
        style={{
          flex: 4,
        }}
      >
        <ScrollView>
          {featuredProducts.length > 0 && (
            <View>
              <Block
                flex={false}
                row
                center
                space="between"
                style={styles.header}
              >
                <TextCustom h2 bold>
                  Featured Products
                </TextCustom>
              </Block>
              <MasonryProducts products={featuredProducts.slice(0, 6)} />
            </View>
          )}
          <Block flex={false} row center space="between" style={styles.header}>
            <TextCustom h2 bold>
              Best selling products
            </TextCustom>
          </Block>
          <MasonryProducts products={bestSellingProducts} />
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

export default HomeScreenPresenter;
