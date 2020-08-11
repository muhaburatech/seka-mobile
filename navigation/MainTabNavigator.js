import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Cart from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';

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
            Math.random();
            iconName = 'ios-search';
          } else if (route.name === 'My Cart') {
            iconName = 'ios-cart';
          } else if (route.name === 'My Profile') {
            iconName = Platform.OS === 'ios' ? 'ios-person' : 'md-person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2BDA8E',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 13 },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="My Cart" component={Cart} />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Routes;
