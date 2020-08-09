import React from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import { View } from 'react-native';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: white;
  flex: 1;
`;

const SearchResults = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const Column = styled.View`
  margin-right: 10;
`;

const ScrollView = styled.ScrollView``;

const MasonryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  background-color: ${Platform.OS === 'ios' ? Colors.darkGreyColor : 'white'};
  border-radius: 18px;
  margin-top: 15;
  margin-bottom: 15;
  border: 1px solid #2bda8e;
  padding-horizontal: 15px;
  width: ${Platform.OS === 'ios' ? '90%' : '91%'};
  margin-right: 10px;
  height: ${Platform.OS === 'ios' ? '40px' : '40px'};
`;

const splitArray = (arr) => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const SearchScreenPresenter = ({
  searchResults,
  searchInput,
  handleInputChange,
}) => {
  let resultsInfo = '';
  if (searchResults.lenght === 0) {
    resultsInfo = 'No results found';
  } else if (searchResults.length === 1) {
    resultsInfo = '1 result found';
  } else {
    resultsInfo = `${searchResults.length} results found`;
  }

  return (
    <Container>
      <Input
        value={searchInput}
        onChangeText={handleInputChange}
        onSubmitEditing={handleInputChange}
        placeholder="Search for a product"
        blurOnSubmit
        returnKeyType="search"
        underlineColorAndroid="white"
      />
      <SearchResults>{resultsInfo}</SearchResults>

      {searchResults.lenght === 1 ? (
        searchResults.map((product) => (
          <MasonryContainer key={product.id}>
            <ProductCard product={product} />
          </MasonryContainer>
        ))
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <MasonryContainer>
            <Column>
              {splitArray(searchResults).firstHalf.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Column>
            <Column>
              {splitArray(searchResults).secondHalf.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Column>
          </MasonryContainer>
        </ScrollView>
      )}
    </Container>
  );
};

export default SearchScreenPresenter;
