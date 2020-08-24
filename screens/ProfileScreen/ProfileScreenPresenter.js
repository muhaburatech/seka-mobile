import React from 'react';
import { Platform, Linking, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import ProfileLink from '../../components/ProfileLink';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const LinksList = styled.ScrollView``;

const ProfileScreenPresenter = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LinksList
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <ProfileLink
          name="My Orders"
          description="Check your order history"
          handlePress={() => {
            return navigation.navigate('Order List');
          }}
          iconName={
            Platform.OS === 'ios' ? 'ios-trending-up' : 'md-trending-up'
          }
        />
      </LinksList>
    </Container>
  );
};

export default ProfileScreenPresenter;
