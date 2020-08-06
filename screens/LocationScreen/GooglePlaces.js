import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({ notifyChange }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      autoFocus={true}
      fetchDetails={true}
      listViewDisplayed={false}
      onPress={(data, details = null) => {
        const locationDetails = {
          id: details.place_id,
          main_text: data.structured_formatting.main_text,
          secondary_text: data.structured_formatting.secondary_text,
          street: details.address_components[0].short_name,
          district: details.address_components[3].short_name,
        };

        return notifyChange(locationDetails);
      }}
      query={{
        key: 'AIzaSyDeHHN_gaGCNZpgbW27eZJvLuH0iFcnpz0',
        language: 'en',
        components: 'country:rw',
      }}
    />
  );
};

export default GooglePlacesInput;
