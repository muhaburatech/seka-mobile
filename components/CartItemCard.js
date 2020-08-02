import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 20px;
`;

const ImageContainer = styled.View`
  width: ${Layout.window.width / 2 - 30};
  height: 120px;
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 15px;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const CartItemCard = ({ cartItem }) => {
  return (
    <Container>
      <ImageContainer>
        <AutoHeightImage
          width={Layout.window.width / 2 - 30}
          source={{
            uri: cartItem.image,
          }}
          style={{
            maxHeight: 120,
          }}
        />
      </ImageContainer>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'space-around',
          paddingLeft: 15,
        }}
      >
        <Name>{cartItem.title}</Name>
        <Price>{`${cartItem.numberOfItems}x Items`}</Price>
        <Price>{`RWF ${cartItem.price}`}</Price>
      </View>
    </Container>
  );
};

export default CartItemCard;
