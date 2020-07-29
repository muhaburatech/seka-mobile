import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { products } from '../../dummy';
import SearchScreenPresenter from './SearchScreenPresenter';
import SearchBar from '../../components/SearchBar';

const Stack = createStackNavigator();

function SearchScreen() {
  return <SearchScreenPresenter products={products} />;
}

const SearchScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SearchScreen}
        name="Search"
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchScreenContainer;
