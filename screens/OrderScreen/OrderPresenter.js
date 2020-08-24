import React from 'react';
import { ScrollView } from 'react-native';
import { Card, View, Text } from 'react-native-ui-lib';
import OrderStatus from '../../components/orderStatus';

const OrderPresenter = ({ order }) => {
  const allProducts = order.products.split(',');
  const products = allProducts.map((product) => {
    const splitProductData = product.split(' - ');
    return {
      items: splitProductData[0],
      price: Number(splitProductData[1]),
    };
  });

  const deliveryCharges = order.transport_cost;

  let totalPrice = 0;
  for (let item of products) {
    totalPrice += item.price;
  }

  let totalPriceIncludingDelivery = deliveryCharges + totalPrice;

  return (
    <ScrollView>
      <OrderTracking status={order.status} lastupdated={order.updated_at} />
      <OrderDetails
        products={products}
        totalPrice={totalPrice}
        totalPriceIncludingDelivery={totalPriceIncludingDelivery}
      />
      <DeliveryLocationDetails location={order.address} phone={order.phone} />
      <PaymentMethod mode={order.payment_method} orderId={order.order_id} />
    </ScrollView>
  );
};

function OrderTracking({ status, lastupdated }) {
  return (
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
            color: '#2BDA8E',
            marginBottom: 15,
          }}
        >
          Order Tracking
        </Text>
        <OrderStatus lastupdated={lastupdated} status={status} />
      </View>
    </Card>
  );
}

function OrderDetails({ products, totalPrice, totalPriceIncludingDelivery }) {
  return (
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
            color: '#2BDA8E',
          }}
        >
          Your Order Details
        </Text>
        {products.map((item) => {
          return (
            <Row
              id={item.items}
              col1={`${item.items}`}
              col2={`RWF ${item.price}`}
            />
          );
        })}
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 1,
            marginBottom: 10,
            color: '#2BDA8E',
          }}
        >
          Total
        </Text>
        <Row col1="Sub Total product amount" col2={`RWF ${totalPrice}`} />
        <Row col1="Delivery charges" col2="RWF 1,200" />
        <Row col1="Tax" col2="RWF 0" />
        <Row col1="Container Charge" col2="RWF 0" />
        <Row
          col1="Total amount"
          col2={`RWF ${totalPriceIncludingDelivery}`}
          isBold
        />
      </View>
    </Card>
  );
}

function DeliveryLocationDetails({ location, phone }) {
  return (
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
            color: '#2BDA8E',
          }}
        >
          Delivery Location
        </Text>
        <Row col1="Street Name: " col2={`${location.location_name}`} />
        <Row col1="Area Name: " col2={`${location.district}`} />
        <Row col1="Contact Phone: " col2={`${phone}`} />
        <Row col1="House Number: " col2="None" />
      </View>
    </Card>
  );
}

function PaymentMethod({ mode, orderId }) {
  return (
    <Card
      borderRadius={12}
      containerStyle={{ margin: 20, paddingTop: 10, paddingLeft: 10 }}
      enableShadow={true}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        Payment Method
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'normal',
        }}
      >
        {mode}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        Cash on Delivery
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'normal',
        }}
      >
        {orderId}
      </Text>
    </Card>
  );
}

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
