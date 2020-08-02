import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapInput from './MapInput';

const MapContainer = () => {
  const [region, setRegion] = useState(null);
  function getCoordsFromName(loc) {
    setRegion(loc);
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4 }}>
        <MapInput notifyChange={(loc) => getCoordsFromName(loc)} />
        {region ? (
          <View>
            <Text>{region}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapContainer;
