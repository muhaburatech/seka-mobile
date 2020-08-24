import React from 'react';
import { StatusBar, Text } from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import UserPartials from '../../components/UserPartials';
import Modal from '../../components/Modal';
import formatNumber from '../../utils/formatNumber';

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 20px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

const ReadMore = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 40px;
`;

const ProductScreenPresenter = ({
  productDetails,
  handleAddToCart,
  modalVisible,
  handlePressOk,
}) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Modal
        isVisible={modalVisible}
        handleCloseModel={handlePressOk}
        content="Product successfully added to cart"
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
        <Swiper
          style={{ height: getHeight(), marginBottom: 20 }}
          activeDotColor="rgb(255,99,71)"
          dotColor="rgba(255, 255, 255, 0.3)"
        >
          {productDetails.Image.map((image) => {
            return (
              <Image
                key={image.name}
                source={{
                  uri: image.url,
                }}
              />
            );
          })}
        </Swiper>
        <DataContainer>
          <NamePrice>
            <NamePriceText>{productDetails.Title}</NamePriceText>
            <NamePriceText>{`RWF ${formatNumber(
              productDetails.Price
            )}`}</NamePriceText>
          </NamePrice>
          <Divider />
          <Description>{productDetails.Description}</Description>
          <UserPartials
            handleAddToCart={handleAddToCart}
            productDetails={productDetails}
          />
        </DataContainer>
      </ScrollView>
    </Container>
  );
};

export default ProductScreenPresenter;
