import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const splitArray = (arr) => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const MasonryProducts = ({ products, heading }) => {
  const { firstHalf } = splitArray(products);
  return (
    <View>
      <Text style={style.heading}>{heading}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {firstHalf.map((product) => {
          return (
            <View style={{ margin: 20 }} key={product.name}>
              <ProductCard
                imgSrc={product.uri}
                price={product.price}
                name={product.name}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  heading: {
    marginLeft: 12,
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },
});
MasonryProducts.propTypes = {
  products: PropTypes.instanceOf(Array),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MasonryProducts;
