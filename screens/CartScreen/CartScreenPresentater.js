import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import CartItemCard from '../../components/CartItemCard';
import SmallButton from '../../components/SmallButton';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const CartPresenter = ({ cartItems }) => {
  console.log('cartItems :>> ', cartItems);
  let totalPrice = 0;
  for (let item of cartItems) {
    totalPrice += item.price;
  }
  const navigation = useNavigation();
  if (cartItems.length === 0) {
    return (
      <Container>
        <Text>No items in Cart</Text>
      </Container>
    );
  }
  return (
    <ScrollView>
      {cartItems.map((cartItem) => {
        return <CartItemCard key={cartItem.id} cartItem={cartItem} />;
      })}
      <View
        style={{
          margin: 40,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          Total Price:
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          RWF {totalPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}
      >
        <SmallButton
          text="Proceed to checkout"
          accent
          onPress={() => navigation.navigate('Location')}
        />
      </View>
    </ScrollView>
  );
};

export default CartPresenter;
