import React from 'react';
import { connect } from 'react-redux';
import CartPresenter from './CartScreenPresentater';

const CartContainer = ({ cartItems }) => {
  return <CartPresenter cartItems={cartItems} />;
};

const mapStateToProps = ({ cart }) => {
  return {
    cartItems: cart,
  };
};

export default connect(mapStateToProps)(CartContainer);
