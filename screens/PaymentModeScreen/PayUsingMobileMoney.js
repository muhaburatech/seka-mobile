import React, {useState, useEffect} from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SmallButton from '../../components/SmallButton';
import { sendMomoPaymentRequest } from '../../redux/actions/payment/mobileMoney';
import uuid from 'react-native-uuid';


const PayUsingMobileMoney = ({user, totalPrice, sendMomoPaymentRequest, momoState, products}) => {

  const navigation = useNavigation();


  const [phoneNumber, setPhoneNumber] = useState('');
  const [btntext, setBtntext] = useState('Pay now');
  const [disable, setDisable] = useState(false);




  useEffect(() => {
   const numb = `0${user.phoneNumber.replace(/\s+/g, '')}`;
  setPhoneNumber(numb);
  }, []);


  const processPayment = async () => {
    setBtntext('Sending request...');
    setDisable(true);
    const key = uuid.v4();

    // JSON.stringify(products[0])

    const data = {
      details: 'order',
      amount: Number(totalPrice),
      email: user.email,
      cname: user.text,
      cnumber: `0${user.phoneNumber.replace(/\s+/g, '')}`,
      refid: key
    };

    const paymentRes = await sendMomoPaymentRequest(data);


    setTimeout(() => {
      navigation.navigate('Momo proccessing');
    }, 3000);
  }


  const onSend = (phoneNumber) => {

    if (!phoneNumber) {
      return Alert.alert('Please enter your Mobile money number');
    }

    Alert.alert('Payment comfirmation', 'Do you want to proceed the payment?', [{text: 'Yes', onPress: () => processPayment()}, {text: 'No'}])

  };


console.log('loaded momo....');


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
      <Text  style={{
        flex: .1,
        color: '#666',
        marginBottom: 5,

      }}
       >Enter the number you want to use for payment</Text>
      <View
        style={{
          height: 50,
          width: 350,
          marginBottom: 40,
        }}
      >
        <TextInput
          label="Mobile number"
          theme={{ colors: { primary: '#ffbd59' } }}
          underlineColor={'#ffbd59'}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={( phoneNumber ) => setPhoneNumber(phoneNumber)}
        />
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <SmallButton
          disable={disable}
          accent
          text={`${btntext}`}
          onPress={() => onSend(phoneNumber)}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ( state ) => {
  return { user: state.otp.user,
    products: state.cart,
    momoState: state.momo,
    totalPrice: state.totalPrice,
   };
}

export default connect(mapStateToProps, { sendMomoPaymentRequest })(PayUsingMobileMoney);
