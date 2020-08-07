import React from 'react';
import { ScrollView } from 'react-native';
import { Card, View, Text } from 'react-native-ui-lib';
import OrderStatus from '../../components/orderStatus';

const OrderPresenter = () => {
  return (
    <ScrollView>
      <Card
        row
        borderRadius={12}
        containerStyle={{ margin: 20 }}
        enableShadow={true}
      >
        <View
          flex
          spread
          style={{
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 1,
              textAlign: 'center',
              color: 'tomato',
              marginBottom: 15,
            }}
          >
            Order Tracking
          </Text>
          <OrderStatus />
          <OrderStatus />
          <OrderStatus />
        </View>
      </Card>
      <Card
        row
        borderRadius={12}
        containerStyle={{ margin: 20 }}
        enableShadow={true}
      >
        <View
          flex
          spread
          style={{
            paddingTop: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 1,
              marginBottom: 10,
              color: 'tomato',
            }}
          >
            Your Order Details
          </Text>
          <Row col1="1x Baby Pampers" col2="RWF 14,000" />

          <Text
            style={{
              fontSize: 19,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 1,
              marginBottom: 10,
              color: 'tomato',
            }}
          >
            Total
          </Text>

          <Row col1="Sub Total product amount" col2="RWF 14,000" />
          <Row col1="Delivery charges" col2="RWF 1,200" />
          <Row col1="Tax" col2="RWF 0" />
          <Row col1="Container Charge" col2="RWF 0" />
          <Row col1="Total amount" col2="RWF 7000" isBold />
        </View>
      </Card>
      <Card
        row // control the children flow direction
        borderRadius={12}
        containerStyle={{ margin: 20 }}
        enableShadow={true}
      >
        <View
          flex
          spread
          style={{
            paddingTop: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 1,
              marginBottom: 10,
              color: 'tomato',
            }}
          >
            Delivery Location
          </Text>
          <Row col1="Street Name" col2="Rubangura House" />
          <Row col1="Area Name" col2="Nyarugenge" />
          <Row col1="Contact Phone" col2="250785141480" />
          <Row col1="House Number" col2="None" />
        </View>
      </Card>
      <Card
        borderRadius={12}
        containerStyle={{ margin: 20, paddingTop: 10 }}
        enableShadow={true}
      >
        <Row col1="Payment Method" col2="Order ID" isBold />
        <Row col1="Cash on Delivery" col2="S15549O-2186843" />
      </Card>
    </ScrollView>
  );
};

export default OrderPresenter;

function Row({ col1 = '', col2 = '', isBold = false }) {
  return (
    <View
      row
      spread
      style={{
        marginBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: isBold ? 'bold' : 'normal',
        }}
      >
        {col1}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: isBold ? 'bold' : 'normal',
        }}
      >
        {col2}
      </Text>
    </View>
  );
}
