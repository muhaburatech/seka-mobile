import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';

const OrderStatus = () => {
  return (
    <View
      row
      style={{
        marginBottom: 20,
        paddingLeft: 30,
      }}
    >
      <FontAwesome name="check-circle" size={30} color="tomato" />
      <View
        style={{
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            fontSize: 17,
          }}
        >
          2020-07-24 13:41:35
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
          }}
        >
          Review
        </Text>
      </View>
    </View>
  );
};

export default OrderStatus;
