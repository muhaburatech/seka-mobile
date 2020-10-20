import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OTPTextView from 'react-native-otp-textinput';
import SmallButton from '../../components/SmallButton';

class VerifyCode extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

  alertText = () => {
    Alert.alert('Invalid code entered');
  };

  clear = () => {
    this.input1.clear();
  };

  updateOtpText = () => {
    this.input1.setValue(this.state.inputText);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Enter the code recieved from sms
        </Text>
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          handleTextChange={(text) => this.setState({ otpInput: text })}
          inputCount={4}
          keyboardType="numeric"
        />
        <View style={styles.buttonWrapper}>
          <SmallButton
            text="Verify"
            accent
            onPress={() => {
              const isValid = this.props.storedCode.code == this.state.otpInput;
              if (!isValid) {
                this.alertText();
              } else {
                this.props.navigation.navigate('Payment');
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ otp }) => {
  return {
    storedCode: otp,
  };
};

function WrapVerifyCode({ storedCode }) {
  const navigation = useNavigation();

  return <VerifyCode storedCode={storedCode} navigation={navigation} />;
}

export default connect(mapStateToProps)(WrapVerifyCode);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
});
