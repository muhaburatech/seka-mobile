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
import Order from '../screens/OrderScreen';
import OrderListScreen from '../screens/OrderListScreen';
import MobileMoney from '../screens/PaymentModeScreen/PayUsingMobileMoney';
import MobileMoneyPaymentProcessing from '../screens/PaymentModeScreen/MobileMoneyPaymentProcessing';
import { BackHandler } from 'react-native';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{
            headerTitle: 'SEKA FOODS',
          }}
        />
        <Stack.Screen name="My Order" component={Order} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Register Phone Number" component={OTP} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Order List" component={OrderListScreen} />
        <Stack.Screen name="Mobile Money" component={MobileMoney} />
        <Stack.Screen  name="Momo proccessing" options={{headerShown: false}} component={MobileMoneyPaymentProcessing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
