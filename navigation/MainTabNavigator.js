import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Order from '../screens/OrderScreen';
import Cart from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Search') {
            iconName = 'ios-search';
          } else if (route.name === 'My Cart') {
            iconName = 'ios-cart';
          } else if (route.name === 'My Order') {
            iconName = 'md-reorder';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 13 },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="My Cart" component={Cart} />
      <Tab.Screen name="My Order" component={Order} />
    </Tab.Navigator>
  );
};

export default Routes;
