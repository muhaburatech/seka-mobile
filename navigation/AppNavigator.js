import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';
import ProductScreen from '../screens/ProductScreen';
import ThreadScreen from '../screens/ThreadScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
