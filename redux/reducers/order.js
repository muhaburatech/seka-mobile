import {
  ADD_ORDER_PENDING,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR,
} from '../actions/order/order';

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_ORDER_PENDING:
      return Object.assign({}, { ...state, pending: true });
    case ADD_ORDER_SUCCESS:
      return Object.assign(
        {},
        { ...state, pending: false, order: action.data }
      );
    case ADD_ORDER_ERROR:
      return Object.assign(
        {},
        { ...state, pending: false, error: action.error }
      );
    case FETCH_ORDERS_PENDING:
      return Object.assign(
        {},
        {
          ...state,
          orders: {
            pending: true,
          },
        }
      );
    case FETCH_ORDERS_SUCCESS:
      return Object.assign(
        {},
        {
          ...state,
          orders: {
            pending: false,
            orders: action.data,
          },
        }
      );
    case FETCH_ORDERS_ERROR:
      return Object.assign(
        {},
        {
          ...state,
          orders: {
            pending: false,
            error: action.error,
          },
        }
      );
    default:
      return state;
  }
}
