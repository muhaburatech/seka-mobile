import React from 'react';
import { Card, View, Text } from 'react-native-ui-lib';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import { registerOrder, fetchOrders } from '../../redux/actions/order/order';
import { clearCartInfo } from '../../redux/actions/cart/actions';

import idGeneretor from '../../utils/uniqueIDgenerator';
const PaymentOptionsScreen = ({
  phone,
  cartItems,
  choosenLocation,
  registerOrder: register_order,
  getAllOrders,
  deleteAllItemsInCart,
}) => {
  const navigation = useNavigation();

  if (0) {
    return (
      <Modal
        isVisible={modalVisible}
        handleCloseModel={handlePressOk}
        content="Product successfully added to cart"
      />
    );
  }

  return (
    <Card
      row
      borderRadius={12}
      onPress={() => {
        const orderId = idGeneretor();
        register_order({ orderId, cartItems, choosenLocation, phone });
        getAllOrders(phone);
        console.log(phone);
        deleteAllItemsInCart();
        // return navigation.navigate('Order List');
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

const mapStateToProps = ({ cart, location, otp }) => {
  return {
    cartItems: cart,
    choosenLocation: location.filter((loc) => loc.chosen === true)[0],
    phone: otp.user.phoneNumber,
  };
};

export default connect(mapStateToProps, {
  registerOrder,
  getAllOrders: fetchOrders,
  deleteAllItemsInCart: clearCartInfo,
})(PaymentOptionsScreen);
