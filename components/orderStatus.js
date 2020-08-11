import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';

const OrderStatus = ({ lastupdated, status }) => {
  return (
    <View
      row
      style={{
        marginBottom: 20,
        paddingLeft: 30,
      }}
    >
      <FontAwesome name="check-circle" size={30} color="#2BDA8E" />
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
          {lastupdated}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
          }}
        >
          {status}
        </Text>
      </View>
    </View>
  );
};

export default OrderStatus;
