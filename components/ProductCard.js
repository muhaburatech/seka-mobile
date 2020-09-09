import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Image } from 'react-native-expo-image-cache';

import styled from 'styled-components';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import formatNumber from '../utils/formatNumber';

const Container = styled.View`
  padding-bottom: 15;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${Layout.window.width / 2 - 30};
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 15px;
  min-height: 150px;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 10px;
  max-width: 120px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Product', product)}
    >
      <Container>
        <ImageContainer>
          <Image
            style={{
              width: Layout.window.width / 2 - 30,
              borderRadius: 15,
              height: 150,
            }}
            // style={{ height: 100, width: 100 }}
            uri={product.Image[0].url}
          />
        </ImageContainer>
        <Name>{product.Title}</Name>
        <Price>{`RWF ${formatNumber(product.Price)}`}</Price>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
