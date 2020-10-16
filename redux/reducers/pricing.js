import { CALCULATE_TOTAL_PRICE } from "../actions/cart/actions";

const initialState = 0;

const totalPrice = (state = initialState, { type, price }) => {
  switch (type) {
    case CALCULATE_TOTAL_PRICE:
      return price;
    default:
      return state;
  }
};

export default totalPrice;
