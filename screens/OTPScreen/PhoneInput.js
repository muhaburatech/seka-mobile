import React, { useState } from 'react';
import { View, Alert } from 'react-native';
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
  const [email, setEmail] = useState('');
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
        email,
        username: text
      })
      .then((response) => {
        // Handle success.
        dispatch(addUser({ text, phoneNumber, email }));
        console.log('Saved already checked store and db ======')
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
        padding: 5,
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
          label="Enter your email"
          theme={{ colors: { primary: '#ffbd59' } }}
          underlineColor={'#ffbd59'}
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View
        style={{
          height: 50,
          width: 350,
          marginBottom: 40,
        }}
      >
        <TextInput
          label="Enter your name"
          theme={{ colors: { primary: '#ffbd59' } }}
          underlineColor={'#ffbd59'}
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
          onPress={() => {
            if (!email) {
              return Alert.alert('Please enter your email');
            }
            if (!text) {
              return Alert.alert('Please enter your name');
            }
            if (!phoneNumber) {
              return Alert.alert('Please enter your phone number');
            }
            onSend(phonePlusCode, otp);
          }}
        />
      </View>
    </View>
  );
};



export default connect()(PhoneInputScreen);
