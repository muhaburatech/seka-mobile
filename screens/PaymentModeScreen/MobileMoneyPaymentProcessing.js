import React, {useContext} from "react";
import { ActivityIndicator, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/Colors';

import {AppStateContext} from '../../utils/reactContext';


const WaitingScreen = () => {


  const {socket} = useContext(AppStateContext);

  const navigation = useNavigation();

  socket.on('postback', (paymentRes) => {

    if(paymentRes.status === 'OK') {

      Alert.alert('Payment comfirmation', `${paymentRes.message}`, [{text: 'Ok', onPress: () => navigation.navigate('Home')}])
    }else {
   
      Alert.alert('Payment comfirmation', `${paymentRes.message}`, [{text: 'Ok', onPress: () => navigation.navigate('Mobile Money')}]);
  
    }

  });

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={Colors.tintColor} />
      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>We're processing your payment, we'll get back to you shortly...</Text>
        </View>
    
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }

});

export default WaitingScreen;
