import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './action';
import { backendUrl } from '../../../constants/server';

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch(`${backendUrl}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
