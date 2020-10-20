import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SmallButton from '../../components/SmallButton';
import { sendMomoPaymentRequest } from '../../redux/actions/payment/mobileMoney';
import { addTransaction } from '../../redux/actions/transactions';
import {AppStateContext} from '../../utils/reactContext';


const PayUsingMobileMoney = ({user, totalPrice, sendMomoPaymentRequest, addTransaction, transactionState,  momoState, products}) => {

  const {socket} = useContext(AppStateContext)

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
    // create transaction with the socket it

    const transactionData = {
      status: 'pending',
      amount: `${totalPrice}`,
      phoneNumber: `0${user.phoneNumber.replace(/\s+/g, '')}`,
      username: user.text,
      socketId: socket.id
    };

    const transaction = await addTransaction(transactionData);

    console.log('trans===', transaction._id);

      if(!transaction) {
        Alert.alert('Transaction request', 'Something went wrong, please try again!');
        setBtntext('Pay now');
        setDisable(false);
      }else{

        // get the transaction created and take its id make it the refid and rend the payment request
    const data = {
      details: 'Payment of order.',
      amount: Number(totalPrice),
      email: user.email,
      cname: user.text,
      cnumber: `0${user.phoneNumber.replace(/\s+/g, '')}`,
      refid: transaction._id
    };

    const paymentRes = await sendMomoPaymentRequest(data);

    if(paymentRes && paymentRes.retcode === 0){
        navigation.navigate('Momo proccessing');
        setBtntext('Pay now');
        setDisable(false);
  
    }else {
    Alert.alert('Payment process', 'Something went wrong, please try again!')
    setBtntext('Pay now');
    setDisable(false);
    }
  }
      }


  const onSend = (phoneNumber) => {

    if (!phoneNumber) {
      return Alert.alert('Please enter your Mobile money number');
    }

    Alert.alert('Payment comfirmation', 'Do you want to proceed the payment?', [{text: 'Yes', onPress: () => processPayment()}, {text: 'No'}])

  };

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
    transactionState: state.transaction,
   };
}

export default connect(mapStateToProps, { sendMomoPaymentRequest, addTransaction })(PayUsingMobileMoney);
