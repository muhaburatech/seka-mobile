import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ProductScreenPresenter from './ProductScreenPresenter';
import { addItemToCart, clearCartInfo } from '../../redux/actions/cart/actions';

const ProductScreenContainer = ({ route, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  function handleAddToCart(item) {
    setModalVisible(true);
    dispatch(addItemToCart(item));
  }

  function toggleModal() {
    setModalVisible(!modalVisible);
    navigation.navigate('Home');
  }

  return (
    <ProductScreenPresenter
      handleAddToCart={handleAddToCart}
      productDetails={route.params}
      modalVisible={modalVisible}
      handlePressOk={toggleModal}
    />
  );
};

export default connect()(ProductScreenContainer);
