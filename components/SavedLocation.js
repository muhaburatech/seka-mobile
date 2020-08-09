import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Checkbox } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const SaveLocation = ({
  selectedLocation,
  location,
  handleDeleteLocation,
  setChosenLocation,
}) => {
  return (
    <View style={style.locationBox}>
      <MaterialIcons
        style={{ paddingRight: 5 }}
        name="location-on"
        size={40}
        color={'#2BDA8E'}
      />
      <View>
        <Text style={style.nameOfLocation}>{location.location_name}</Text>
        <Text style={style.district}>{location.district}</Text>
        <Text style={style.district}>{location.phone_number}</Text>
      </View>
      <View style={style.checkboxContainer}>
        <Checkbox
          status={selectedLocation === location.id ? 'checked' : 'unchecked'}
          onPress={() => setChosenLocation(location.id)}
          style={style.checkbox}
        />
        <TouchableOpacity
          style={{
            marginTop: 14,
          }}
          onPress={() => {
            handleDeleteLocation(location.id);
          }}
        >
          <MaterialIcons
            style={{ paddingRight: 5 }}
            name="delete"
            size={30}
            color={'#2BDA8E'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  locationBox: {
    marginTop: 15,
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
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  checkbox: {
    color: '#2BDA8E',
  },
});

export default SaveLocation;
