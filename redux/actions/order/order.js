import axios from 'axios';
import { backendUrl } from '../../../constants/server';

export const ADD_ORDER_PENDING = 'ADD_ORDER_PENDING';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';

export const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

function addOrderPending() {
  return {
    type: ADD_ORDER_PENDING,
  };
}

function addOrderSuccess(data) {
  return {
    type: ADD_ORDER_SUCCESS,
    data,
  };
}

function addOrderError(error) {
  return {
    type: ADD_ORDER_ERROR,
    error,
  };
}

function fetchOrderPending() {
  return {
    type: ADD_ORDER_PENDING,
  };
}

function fetchOrderSuccess(data) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    data,
  };
}

function fetchOrderError(error) {
  return {
    type: FETCH_ORDERS_ERROR,
    error,
  };
}

export function registerOrder(data) {
  return async function(dispatch) {
    let products = [];
    for (let product of data.cartItems) {
      products.push(
        `${product.numberOfItems}x ${product.title} - ${product.price} `
      );
    }

    dispatch(addOrderPending());
    const res = await axios
      .post(`${backendUrl}/orders`, {
        address: data.choosenLocation,
        order_id: data.orderId,
        products: products.toString(),
        phone: data.phone,
      })
      .then((response) => {
        const { data } = response;
        dispatch(addOrderSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(addOrderError(error));
      });
    return res;
  };
}

export function fetchOrders(phone) {
  return function(dispatch) {
    dispatch(fetchOrderPending());
    axios
      .get(`${backendUrl}/orders?phone=${phone}`)
      .then((response) => {
        const { data } = response;
        dispatch(fetchOrderSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchOrderError(error));
      });
  };
}
