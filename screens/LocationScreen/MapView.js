import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapViewPresenter = ({ region, onRegionChange }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      onRegionChange={(reg) => onRegionChange(reg)}
    >
      <Marker coordinate={region} />
    </MapView>
  );
};

export default MapViewPresenter;
