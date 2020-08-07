import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import IntlPhoneInput from 'react-native-intl-phone-input';
import SmallButton from '../../components/SmallButton';
import { backendUrl } from '../../constants/server';
var otpgen = require('@argha0277/otp-generator');
import { addOTPCode } from '../../redux/actions/userVerification/';

const PhoneInputScreen = ({ dispatch }) => {
  const navigation = useNavigation();
  const [dialCode, setDialCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const onSendPhoneSubmit = (phonePlusCode, otp) => {
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
      <IntlPhoneInput onChangeText={onChangeText} defaultCountry="RW" />
      <View
        style={{
          marginTop: 50,
        }}
      >
        <SmallButton
          accent
          text={`Send verification code`}
          onPress={() => onSendPhoneSubmit(phonePlusCode, otp)}
        />
      </View>
    </View>
  );
};

export default connect()(PhoneInputScreen);
