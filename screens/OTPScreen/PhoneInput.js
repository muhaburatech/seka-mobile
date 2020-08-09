import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { connect } from 'react-redux';
import IntlPhoneInput from 'react-native-intl-phone-input';
import SmallButton from '../../components/SmallButton';
import { backendUrl } from '../../constants/server';
var otpgen = require('@argha0277/otp-generator');
import { addOTPCode, addUser } from '../../redux/actions/userVerification/';
import { TextInput } from 'react-native-paper';

const PhoneInputScreen = ({ dispatch }) => {
  const navigation = useNavigation();
  const [dialCode, setDialCode] = useState(null);
  const [text, setText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);

  const onSend = (phonePlusCode, otp) => {
    fetch(`${backendUrl}/sms`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phonePlusCode,
        otp,
      }),
    });

    axios
      .post(`${backendUrl}/phonebooks`, {
        number: phoneNumber,
        email: text,
      })
      .then((response) => {
        // Handle success.
        dispatch(addUser({ text, phoneNumber }));
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    dispatch(addOTPCode(otp));
    navigation.navigate('Verify');
  };

  const onChangeText = ({ dialCode, phoneNumber }) => {
    setDialCode(dialCode);
    setPhoneNumber(phoneNumber);
  };

  var otp = otpgen.generate(4);
  const phoneNumberCopy =
    phoneNumber &&
    (phoneNumber[0] === '0' ? phoneNumber.substring(1) : phoneNumber);
  const phonePlusCode = `${dialCode}${phoneNumberCopy}`.replace(/\s+/g, '');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
      }}
    >
      <View
        style={{
          height: 50,
          width: 350,
          marginBottom: 40,
        }}
      >
        <TextInput
          label="Enter your name"
          theme={{ colors: { primary: '#2BDA8E' } }}
          underlineColor={'#2BDA8E'}
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <IntlPhoneInput onChangeText={onChangeText} defaultCountry="RW" />
      <View
        style={{
          marginTop: 50,
        }}
      >
        <SmallButton
          accent
          text={`Send verification code`}
          onPress={() => onSend(phonePlusCode, otp)}
        />
      </View>
    </View>
  );
};

export default connect()(PhoneInputScreen);
