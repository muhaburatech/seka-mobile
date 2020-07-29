import React, { useState } from 'react';
import HomeScreenPresenter from './HomeScreenPresenter';
import SearchBar from '../../components/SearchBar';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home() {
  const [currentTab, setCurrentTab] = useState('All');

  const _handleCategoryChange = (activeTab) => {
    setCurrentTab(activeTab);
  };
  return (
    <HomeScreenPresenter
      currentTab={currentTab}
      handleCategoryChange={_handleCategoryChange}
    />
  );
}

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
