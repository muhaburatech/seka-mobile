import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BigButton from './BigButton';

const Text = styled.Text`
  margin-left: 10px;
`;

const FacebookButton = () => (
  <BigButton transparent={false} onPress={() => null}>
    <Ionicons name="logo-facebook" size={22} color="#3b5998" />
    <Text>Continue with Facebook</Text>
  </BigButton>
);

export default FacebookButton;
