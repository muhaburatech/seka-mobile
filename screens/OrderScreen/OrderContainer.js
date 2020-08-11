import React from 'react';
import { connect } from 'react-redux';
import OrderPresenter from './OrderPresenter';

const OrderContainer = ({ cartItems, choosenLocation, phone, route }) => {
  return (
    <OrderPresenter
      order={route.params}
      phone={phone}
      cartItems={cartItems}
      location={choosenLocation}
    />
  );
};

const mapStateToProps = ({ cart, location, otp }) => {
  return {
    cartItems: cart,
    choosenLocation: location.filter((loc) => loc.chosen === true)[0],
    phone: otp.user.phoneNumber,
  };
};

export default connect(mapStateToProps)(OrderContainer);
