import {
  ADD_LOCATION,
  DELETE_LOCATION,
  SET_CHOSEN_LOCATION,
} from '../actions/location/actions';

export default function cart(state = [], action) {
  let copySavedLocation;
  switch (action.type) {
    case ADD_LOCATION:
      return [...state, action.locationData];
    case DELETE_LOCATION:
      copySavedLocation = [...state];
      return copySavedLocation.filter((loc) => {
        return loc.id !== action.id;
      });
    case SET_CHOSEN_LOCATION:
      copySavedLocation = [...state];
      for (let location of copySavedLocation) {
        if (location.id === action.id) {
          location.chosen = true;
        } else {
          location.chosen = false;
        }
      }
      console.log(copySavedLocation);
      return copySavedLocation;
    default:
      return state;
  }
}
