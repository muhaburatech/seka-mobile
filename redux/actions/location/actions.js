export const ADD_LOCATION = 'ADD_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const SET_CHOSEN_LOCATION = 'SET_CHOSEN_LOCATION';

export function addLocation(locationData) {
  return {
    type: ADD_LOCATION,
    locationData,
  };
}

export function chosenLocation(id) {
  return {
    type: SET_CHOSEN_LOCATION,
    id,
  };
}

export function deleteLocation(id) {
  return {
    type: DELETE_LOCATION,
    id,
  };
}
