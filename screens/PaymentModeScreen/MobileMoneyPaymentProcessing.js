import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/Colors';



const WaitingScreen = () => {

 

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={Colors.tintColor} />
      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Thank you for shopping with SEKA.</Text>
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
