import React from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import styled from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
import {
  getProducts,
  getProductsError,
  getProductsPending,
} from './redux/reducers/product';
import fetchProductsAction from './redux/actions/product/fetchProducts';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    const { fetchProducts } = this.props;

    await Asset.loadAsync([
      require('./assets/images/authBackground.jpg'),
      require('./assets/images/smAvatar.png'),
      require('./assets/images/smAvatar2.png'),
    ]);
    await fetchProducts();

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    // const { isLoadingComplete, products } = this.state;
    console.log('this.state :>> ', this.props);
    if (!this.state.appIsReady) {
      return <Text>starting app</Text>;
    }
    return (
      <Container>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.products,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
    },
    dispatch
  );

const ToBeReduxWrapped = connect(mapStateToProps, mapDispatchToProps)(App);

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <ToBeReduxWrapped />
    </Provider>
  );
}
