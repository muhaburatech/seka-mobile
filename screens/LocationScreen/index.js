import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import SavedLocation from '../../components/SavedLocation';
import Colors from '../../constants/Colors';
import GooglePlacesInput from './GooglePlaces';
import FormatLocation from './FormatLocation/index';
import SmallButton from '../../components/SmallButton';
import {
  deleteLocation,
  chosenLocation,
} from '../../redux/actions/location/actions';

const TabView = ({ currentTab, handleCategoryChange }) => {
  return (
    <ScrollView horizontal={true}>
      <TouchableWithoutFeedback
        onPress={() => handleCategoryChange('Your Locations')}
      >
        <View style={[currentTab === 'Your Locations' && style.tabActive]}>
          <Text
            style={[
              style.tab,
              currentTab === 'Your Locations' && style.tabLinkActive,
            ]}
          >
            Saved Locations
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => handleCategoryChange('Find Location')}
      >
        <View style={[currentTab === 'Find Location' && style.tabActive]}>
          <Text
            style={[
              style.tab,
              currentTab === 'Find Location' && style.tabLinkActive,
            ]}
          >
            Add a Location
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const LocationScreen = ({ savedLocations, dispatch, user }) => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('Your Locations');
  const [region, setRegion] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showFormatLocation, setShowFormatLocation] = useState(false);
  const _handleCategoryChange = (activeTab) => {
    setCurrentTab(activeTab);
  };

  function handleDeleteLocation(id) {
    dispatch(deleteLocation(id));
  }

  function handleSelectedLocation(id) {
    setSelectedLocation(id);
    dispatch(chosenLocation(id));
  }

  function notifyChange(loc) {
    setRegion(loc);
    if (loc) setShowFormatLocation(true);
  }

  console.log('savedLocations.lenght :>> ', savedLocations.lenght);

  return (
    <View style={style.container}>
      <TabView
        currentTab={currentTab}
        handleCategoryChange={_handleCategoryChange}
      />
      {currentTab === 'Your Locations' ? (
        <ScrollView>
          {savedLocations.length === 0 ? (
            <Text
              style={{
                marginTop: 20,
                marginLeft: 10,
              }}
            >
              No saved locations
            </Text>
          ) : (
            savedLocations.map((location) => {
              return (
                <SavedLocation
                  selectedLocation={selectedLocation}
                  setChosenLocation={handleSelectedLocation}
                  key={location.id}
                  handleDeleteLocation={handleDeleteLocation}
                  location={location}
                />
              );
            })
          )}
          {savedLocations.length === 0 ? null : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-around',
                marginBottom: 60,
              }}
            >
              <SmallButton
                text="Place your order"
                accent
                onPress={() => {
                  if (user) {
                    return navigation.navigate('Payment');
                  }
                  return navigation.navigate('Register Phone Number');
                }}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        <ScrollView keyboardShouldPersistTaps="always">
          <GooglePlacesInput notifyChange={notifyChange} />
          {showFormatLocation && (
            <FormatLocation region={region} phone_number="" house_number="" />
          )}
        </ScrollView>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  tab: {
    padding: 20,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    marginRight: 10,
    borderColor: Colors.tabBar,
    marginBottom: 30,
  },
  tabActive: {
    borderBottomColor: '#2BDA8E',
    borderBottomWidth: 3,
  },
  tabLinkActive: {
    color: '#2BDA8E',
  },
});

const mapStateToProps = ({ location, otp }) => {
  return {
    savedLocations: location,
    user: otp.user,
  };
};

export default connect(mapStateToProps)(LocationScreen);
