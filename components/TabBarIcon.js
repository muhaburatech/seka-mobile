import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={22}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
