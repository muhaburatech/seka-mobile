import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapContainer from './MapContainer';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import SmallButton from '../../components/SmallButton';

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
            Your Location
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
            Find Location
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const LocationScreen = () => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('Your Locations');

  const _handleCategoryChange = (activeTab) => {
    setCurrentTab(activeTab);
  };

  return (
    <View>
      <TabView
        currentTab={currentTab}
        handleCategoryChange={_handleCategoryChange}
      />
      {currentTab === 'Your Locations' ? (
        <View>
          <SmallButton
            text="Proceed to login"
            onPress={() => navigation.navigate('Login')}
            accent
          />
        </View>
      ) : (
        <MapContainer />
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
    borderBottomColor: 'tomato',
    borderBottomWidth: 3,
  },
  tabLinkActive: {
    color: 'tomato',
  },
});

export default LocationScreen;
