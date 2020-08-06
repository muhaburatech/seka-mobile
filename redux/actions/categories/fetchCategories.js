import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './action';
import { backendUrl } from '../../../constants/server';

function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesPending());
    fetch(`${backendUrl}/categories`, {
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
        dispatch(fetchCategoriesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCategoriesError(error));
      });
  };
}

export default fetchCategories;
