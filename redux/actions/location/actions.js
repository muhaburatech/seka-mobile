export const ADD_LOCATION = 'ADD_LOCATION';
export const FETCH_LOCATION = 'FETCH_LOCATION';

export function addLocation(locationData) {
  return {
    type: ADD_LOCATION,
    locationData,
  };
}

export function retrieveLocation() {
  return {
    type: FETCH_LOCATION,
  };
}
