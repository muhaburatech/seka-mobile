import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Layout from '../../../constants/Layout';
import AuthInput from '../../../components/AuthInput';
import AuthButton from '../../../components/AuthButton';
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const ImageBg = styled.Image`
  position: absolute;
  bottom: 0;
  height: ${Layout.window.height};
  width: ${Layout.window.width};
`;

const ButtonsContainer = styled.View`
  margin-top: 20;
  justify-content: flex-end;
  flex: 1;
  width: 80%;
`;

const Divider = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 25px;
`;

const AuthTextContainer = styled.View`
  margin: 30px 0px;
`;

const EmailAuth = styled.KeyboardAvoidingView`
  align-items: center;
  width: 100%;
`;

const EmailAuthForm = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

const FormLocationPresenter = ({
  location_name = '',
  district = '',
  street = '',
  phone_number = '',
  house_number = '',
  onInputChange,
  onRegisterLocation,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageBg
        source={require('../../../assets/images/authBackground.jpg')}
        resizeMode="cover"
      />
      <StatusBar barStyle="light-content" />
      <ButtonsContainer>
        <ScrollView>
          <EmailAuth behavior="padding" enabled>
            <EmailAuthForm>
              <AuthInput
                name="location_name"
                placeholder="location_name"
                value={location_name}
                onChange={onInputChange}
                editable={false}
              />

              <AuthInput
                name="street"
                placeholder="street"
                value={street}
                onChange={onInputChange}
                editable={false}
              />

              <AuthInput
                name="district"
                placeholder="district"
                value={district}
                onChange={onInputChange}
                editable={false}
              />

              <AuthInput
                name="phone_number"
                placeholder="Enter your phone number"
                value={phone_number}
                keyboardType="phone-pad"
                onChange={onInputChange}
              />

              <AuthInput
                name="house_number"
                placeholder="Enter your house number"
                value={house_number}
                onChange={onInputChange}
              />

              <AuthButton
                transparent={false}
                text="Register Location"
                onPress={onRegisterLocation}
              />
            </EmailAuthForm>
          </EmailAuth>
        </ScrollView>
      </ButtonsContainer>
    </Container>
  );
};

export default FormLocationPresenter;
