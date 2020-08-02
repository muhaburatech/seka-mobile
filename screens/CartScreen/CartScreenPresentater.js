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
