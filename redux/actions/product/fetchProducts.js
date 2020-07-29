import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './action';

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch('http://192.168.1.65:1337/products', {
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
