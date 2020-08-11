import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Card, View, Text } from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchOrders } from '../../redux/actions/order/order';

const OrderList = ({ orders }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {orders.map((order) => {
        return (
          <OrderCard
            navigation={navigation}
            order={order}
            key={order.order_id}
          />
        );
      })}
    </ScrollView>
  );
};

const mapStateToProps = ({ otp, order: { orders = [] } }) => {
  return {
    phone: otp.user.phoneNumber,
    orders: orders.orders,
  };
};

export default connect(mapStateToProps, { getAllOrders: fetchOrders })(
  OrderList
);

function OrderCard({ order, navigation }) {
  return (
    <Card
      row
      borderRadius={12}
      onPress={() => {
        return navigation.navigate('My Order', order);
      }}
      containerStyle={{ margin: 13 }}
      enableShadow={true}
    >
      <View>
        <Row col1={`Order:`} col2={`${order.order_id}`} isBold />
        <Row col1={`Last Updated:`} col2={`${order.updated_at}`} />
        <Row col1={`Status:`} col2={`${order.status}`} isBold />
      </View>
    </Card>
  );
}

function Row({ col1 = '', col2 = '', isBold = false }) {
  return (
    <View
      row
      style={{
        marginBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          paddingRight: 4,
          fontWeight: isBold ? 'bold' : 'normal',
        }}
      >
        {col1}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: isBold ? 'bold' : 'normal',
        }}
      >
        {col2}
      </Text>
    </View>
  );
}
