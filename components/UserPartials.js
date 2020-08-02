import React, { useState } from 'react';
import styled from 'styled-components';
import NumericInput from 'react-native-numeric-input';
import SmallButton from './SmallButton';
import Colors from '../constants/Colors';

const Container = styled.View`
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserPartials = ({ handleAddToCart, productDetails }) => {
  const [itemsToAddCart, setItemsToAddCart] = useState(1);
  const product = {
    id: productDetails.id,
    count: itemsToAddCart,
    image: productDetails.Image[0].url,
    title: productDetails.Title,
    price: productDetails.Price,
  };
  return (
    <Container>
      <NumericInput
        value={itemsToAddCart}
        rightButtonBackgroundColor={`${Colors.tintColor}`}
        minValue={1}
        leftButtonBackgroundColor={`${Colors.tintColor}`}
        iconStyle={{ color: 'white' }}
        onChange={(value) => setItemsToAddCart(value)}
      />
      <SmallButton
        onPress={() => handleAddToCart(product)}
        text="Add to cart"
        accent
      />
    </Container>
  );
};

export default UserPartials;
