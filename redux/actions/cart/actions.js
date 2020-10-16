export const ADD_TO_CART = "ADD_TO_CART";
export const FLUSH_CART_INFO = "FLUSH_CART_INFO";
export const CALCULATE_TOTAL_PRICE = "CALCULATE_TOTAL_PRICE";

function totalPrice(price) {
  return {
    type: CALCULATE_TOTAL_PRICE,
    price
  };
}

export const calculatePrice = calculatedprice => dispatch =>
  dispatch(totalPrice(calculatedprice));

export function addItemToCart(cartItem) {
  return {
    type: ADD_TO_CART,
    cartItem
  };
}

export function clearCartInfo() {
  return {
    type: FLUSH_CART_INFO
  };
}
