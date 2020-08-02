export const ADD_TO_CART = 'ADD_TO_CART';
export const FLUSH_CART_INFO = 'FLUSH_CART_INFO';

export function addItemToCart(cartItem) {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
}

export function clearCartInfo() {
  return {
    type: FLUSH_CART_INFO,
  };
}
