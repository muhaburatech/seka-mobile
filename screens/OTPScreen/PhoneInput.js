import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IntlPhoneInput from 'react-native-intl-phone-input';
import SmallButton from '../../components/SmallButton';
import sendSms from '../../utils/sendSms';
var otpgen = require('@argha0277/otp-generator');

class PhoneInputScreen extends Component {
  state = {
    dialCode: '',
    unmaskedPhoneNumber: '',
    phoneNumber: '',
    isVerified: '',
  };

  onChangeText = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    this.setState({
      dialCode,
      unmaskedPhoneNumber,
      phoneNumber,
      isVerified,
    });
  };
  render() {
    var otp = otpgen.generate(4);
    const { phoneNumber, dialCode } = this.state;
    const phoneNumberCopy =
      phoneNumber[0] === '0' ? phoneNumber.substring(1) : phoneNumber;
    const phonePlusCode = `${dialCode}${phoneNumberCopy}`;
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
        <IntlPhoneInput onChangeText={this.onChangeText} defaultCountry="RW" />
        <View
          style={{
            marginTop: 50,
          }}
        >
          <SmallButton
            accent
            text={`Send verification code`}
            onPress={() => sendSms(phonePlusCode, otp)}
          />
        </View>
      </View>
    );
  }
}

module.exports = PhoneInputScreen;
