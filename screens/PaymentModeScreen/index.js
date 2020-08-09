import React from 'react';
import { Card, View, Text } from 'react-native-ui-lib';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PaymentOptionsScreen = () => {
  const navigation = useNavigation();

  return (
    <Card
      row // control the children flow direction
      borderRadius={12}
      onPress={() => {
        return navigation.navigate('My Order');
      }}
      containerStyle={{ margin: 20 }}
      enableShadow={true}
    >
      <View
        row
        flex
        spread
        style={{
          padding: 40,
        }}
      >
        <View
          flex-1
          style={{
            marginTop: 2,
          }}
        >
          <FontAwesome5 name="hand-holding-usd" size={30} color="#2BDA8E" />
        </View>
        <Text
          flex-5
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
          }}
        >
          Cash on Delivery
        </Text>
      </View>
    </Card>
  );
};

export default PaymentOptionsScreen;
