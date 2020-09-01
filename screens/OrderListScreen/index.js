import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Card, View, Text } from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchOrders } from '../../redux/actions/order/order';
import SmallButton from '../../components/SmallButton';

const OrderList = ({ orders = [], user }) => {
  const navigation = useNavigation();
  const [allOrders, setallOrders] = useState(orders);
  const [getOrders, setgetOrders] = useState(() => {
    fetchOrders();
  });
  useEffect(() => {
    setallOrders(orders);
  }, [orders]);

  return (
    <ScrollView>
      {allOrders.map((order) => {
        return (
          <OrderCard
            navigation={navigation}
            order={order}
            user={user}
            key={order.order_id}
          />
        );
      })}
    </ScrollView>
  );
};

const mapStateToProps = ({ otp, order: { orders = [] } }) => {
  return {
    user: otp.user,
    orders: orders.orders,
  };
};

export default connect(mapStateToProps, { getAllOrders: fetchOrders })(
  OrderList
);

function OrderCard({ order, user, navigation }) {
  function openWhatsapp(phone, text) {
    return Linking.openURL(
      `http://api.whatsapp.com/send?phone=250${phone}&text=${text}`
    );
  }

  const message = `Hello, my name is ${user.text}
  i have an issue with order ${order.order_id} having products
  ${order.products}that was placed at ${order.createdAt}`;

  return (
    <Card
      row
      borderRadius={12}
      containerStyle={{ margin: 13 }}
      enableShadow={true}
    >
      <View
        style={{
          flex: 1,
          paddingVertical: 12,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Row col1={`Order:`} col2={`${order.order_id.substring(30)}`} isBold />
        <Row col1={`Last Updated:`} col2={`${order.updatedAt}`} />
        {order.products.split(',').map((item) => {
          const temp = item.split(' - ');
          return <Row key={item.id} col1={`${temp[0]}`} col2={temp[1]} />;
        })}
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
          }}
        >
          <SmallButton
            text="View Status"
            onPress={() => {
              console.log('navigation :>> ', navigation);
              return navigation.navigate('My Order', order);
            }}
            accent
          />
          <View
            style={{
              marginLeft: 15,
            }}
          >
            <SmallButton
              text="Talk to us on Whatsapp"
              onPress={() => {
                return openWhatsapp('731534541', message);
              }}
            />
          </View>
        </View>
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
