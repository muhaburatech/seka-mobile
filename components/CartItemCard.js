import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import formatNumber from '../utils/formatNumber';

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

const CartItemCard = ({ cartItem, handleDeleteCartItem }) => {
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
        <Price>{`RWF ${formatNumber(cartItem.price)}`}</Price>
      </View>
      {/* <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 5,
        }}
        onPress={() => {
          handleDeleteCartItem(location.id);
        }}
      >
        <MaterialIcons
          style={{ paddingRight: 5 }}
          name="delete"
          size={30}
          color={'#ffbd59'}
        />
      </TouchableOpacity> */}
    </Container>
  );
};

export default CartItemCard;
