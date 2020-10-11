import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import SmallButton from '../../components/SmallButton'

const PayUsingMobileMoney = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
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
          label="Enter your name"
          theme={{ colors: { primary: '#ffbd59' } }}
          underlineColor={'#ffbd59'}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <SmallButton
          accent
          text={`Send verification code`}
          onPress={() => {
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

export default PayUsingMobileMoney;
