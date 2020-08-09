import React from 'react';
import { connect } from 'react-redux';
import OrderPresenter from './OrderPresenter';

const OrderContainer = ({ cartItems, choosenLocation }) => {
  return <OrderPresenter cartItems={cartItems} location={choosenLocation} />;
};

const mapStateToProps = ({ cart, location }) => {
  return {
    cartItems: cart,
    choosenLocation: location[3],
  };
};

export default connect(mapStateToProps)(OrderContainer);
