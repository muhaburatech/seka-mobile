import React, { useState } from 'react';
import { Image } from 'react-native';
import { Card, View, Text } from 'react-native-ui-lib';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';

import { registerOrder, fetchOrders } from '../../redux/actions/order/order';
import { clearCartInfo } from '../../redux/actions/cart/actions';
import Modal from '../../components/Modal';

import idGeneretor from '../../utils/uniqueIDgenerator';
const PaymentOptionsScreen = ({
  phone,
  cartItems,
  choosenLocation,
  registerOrder: register_order,
  getAllOrders,
  deleteAllItemsInCart,
}) => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  if (showModal) {
    return (
      <Modal
        isVisible={true}
        handleCloseModel={() => {
          return navigation.navigate('My Profile');
        }}
        content="Order successfully placed"
      />
    );
  }

  return (
    <View>
      <PaymentModeCard
        handleClick={function payOnCashDelivery() {
          const orderId = idGeneretor();
          register_order({ orderId, cartItems, choosenLocation, phone });
          getAllOrders(phone);
          deleteAllItemsInCart();
          setShowModal(true);
        }}
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
            <FontAwesome5 name="hand-holding-usd" size={30} color="#ffbd59" />
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
      </PaymentModeCard>
      <PaymentModeCard
        handleClick={function payUsingMomo() {
          return undefined;
        }}
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
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/images/momo.png')}
            />
          </View>
          <Text
            flex-5
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 5,
            }}
          >
            MTN Mobile Money
          </Text>
        </View>
      </PaymentModeCard>
    </View>
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
  deleteAllItemsInCart: clearCartInfo,
  getAllOrders: fetchOrders,
})(PaymentOptionsScreen);

function PaymentModeCard({ children, handleClick }) {
  return (
    <Card
      row
      borderRadius={12}
      onPress={handleClick}
      containerStyle={{ margin: 20 }}
      enableShadow={true}
    >
      {children}
    </Card>
  );
}
