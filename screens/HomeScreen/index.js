// import HomeScreenContainer from "./HomeScreenContainer";

// export default HomeScreenContainer;

import React, { Component } from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

import ProductCard from '../../components/ProductCard';
import CategoryHeader from '../../components/CategoryHeader/';
// screen height and width
const { width, height } = Dimensions.get('window');

export default class AllProductsScreen extends Component {
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    filtering: false,
    refreshing: false,
    error: null,
    currentTab: 'All',
  };

  componentDidMount() {
    this._fetchAllProducts();
  }

  _fetchAllProducts = (tab = 'All') => {
    const { page } = this.state;
    const category = (t) => `where : { category: { name : "${t}" } }, `;
    const Query = `{
      products(${
        tab === 'All' ? '' : category(tab).toString()
      } limit: 6, start: ${page}){
        Title
        id
        Description
        Image {
          url
        }
        Price
      }
    }`;

    fetch('https://seka-api.herokuapp.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: Query }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState((prevState, nextProps) => ({
          data:
            page === 1
              ? Array.from(res.data.products)
              : [...this.state.data, ...res.data.products],
          loading: false,
          loadingMore: false,
          refreshing: false,
        }));
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  _handleCategoryChange = (activeTab) => {
    this.setState(
      {
        currentTab: activeTab,
        page: 1,
        data: [],
        refreshing: true,
      },
      () => {
        this._fetchAllProducts(activeTab);
      }
    );
  };

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this._fetchAllProducts(this.state.currentTab);
      }
    );
  };

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 6,

        loadingMore: true,
      }),
      () => {
        this._fetchAllProducts(this.state.currentTab);
      }
    );
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          width: width,
          height: height,
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          borderColor: 'blue',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return !this.state.loading ? (
      <View
        style={{
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <View
          style={{
            position: 'absolute',
            zIndex: 100,
            backgroundColor: '#F0F0F0',
          }}
        >
          <CategoryHeader
            currentTab={this.state.currentTab}
            handleCategoryChange={this._handleCategoryChange}
          />
        </View>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            marginTop: 100,
            padding: 15,
          }}
          numColumns={2}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                marginTop: 25,
                width: '50%',
              }}
            >
              <ProductCard product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          // ListHeaderComponent={this._renderHeader}
          ListFooterComponent={this._renderFooter}
          onRefresh={this._handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </View>
    ) : (
      <View>
        <Text style={{ alignSelf: 'center' }}>Loading Products</Text>
        <ActivityIndicator />
      </View>
    );
  }
}
