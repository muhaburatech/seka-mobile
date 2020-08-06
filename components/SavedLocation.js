import React, { useState } from 'react';
import { View, Text, CheckBox, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SaveLocation = ({ location }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.locationBox}>
      <MaterialIcons
        style={{ paddingRight: 5 }}
        name="location-on"
        size={40}
        color={'tomato'}
      />
      <View>
        <Text style={style.nameOfLocation}>{location.location_name}</Text>
        <Text style={style.district}>{location.district}</Text>
        <Text style={style.district}>{location.phone_number}</Text>
      </View>
      <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  locationBox: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginBottom: 10,
  },
  nameOfLocation: {
    fontWeight: 'bold',
    fontSize: 18,
    width: Dimensions.get('window').width * 0.67,
    marginBottom: 13,
  },
  district: {
    fontSize: 16,
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    color: 'tomato',
  },
});

export default SaveLocation;
