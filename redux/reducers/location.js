import { ADD_LOCATION } from '../actions/location/actions';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [...state, action.locationData];
    default:
      return state;
  }
}
