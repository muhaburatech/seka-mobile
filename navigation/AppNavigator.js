import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';
import ProductScreen from '../screens/ProductScreen';
import LocationScreen from '../screens/LocationScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import OTP from '../screens/OTPScreen/PhoneInput';
import Verify from '../screens/OTPScreen/VerifyCode';
import Payment from '../screens/PaymentModeScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Register Phone Number" component={OTP} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
