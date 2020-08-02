import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './action';

function fettchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesPending());
    fetch(`http://192.168.1.65:1337/categories`, {
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

export default fettchCategories;
