import React from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({ notifyChange }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      autoFocus={false}
      listViewDisplayed="auto"
      fetchDetails={true}
      enablePoweredByContainer={true}
      onPress={(data, details = null) => {
        return notifyChange(details.name);
      }}
      query={{
        key: 'AIzaSyDeHHN_gaGCNZpgbW27eZJvLuH0iFcnpz0',
        language: 'en',
      }}
      styles={{
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch"
    />
  );
};

export default GooglePlacesInput;
