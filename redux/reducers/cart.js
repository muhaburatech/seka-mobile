import { ADD_TO_CART, FLUSH_CART_INFO } from '../actions/cart/actions';

export default function cart(state = [], { type, cartItem }) {
  switch (type) {
    case ADD_TO_CART:
      const newState = [...state].filter((item) => {
        return item.id !== cartItem.id;
      });
      return [
        ...newState,
        {
          id: cartItem.id,
          numberOfItems: cartItem.count,
          image: cartItem.image,
          title: cartItem.title,
          price: cartItem.price * cartItem.count,
          variantId: cartItem.variantId,
        },
        
      ];
    case FLUSH_CART_INFO:
      return [];
    default:
      return state;
  }
}
