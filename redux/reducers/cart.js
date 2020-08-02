import { ADD_TO_CART, FLUSH_CART_INFO } from '../actions/cart/actions';

export default function cart(state = [], { type, cartItem }) {
  switch (type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          id: cartItem.id,
          numberOfItems: cartItem.count,
          image: cartItem.image,
          title: cartItem.title,
          price: cartItem.price,
        },
      ];
    case FLUSH_CART_INFO:
      return [];
    default:
      return state;
  }
}
