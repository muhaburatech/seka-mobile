import React from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import styled from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import { store, persistor } from './redux/store';
import fetchProductsAction from './redux/actions/product/fetchProducts';
import fetchCategoriesAction from './redux/actions/categories/fetchCategories';
import AppRectContextProvider from './utils/reactContext';


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
    const { fetchProducts, fetchCategories } = this.props;

    await Asset.loadAsync([
      require('./assets/images/authBackground.jpg'),
      require('./assets/images/smAvatar.png'),
      require('./assets/images/smAvatar2.png'),
    ]);
    const res = await fetchProducts();
    await fetchCategories();
    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return <Text>starting app</Text>;
    }
    return (
      <Container>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
       <AppRectContextProvider>
         <AppNavigator />
       </AppRectContextProvider>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
      fetchCategories: fetchCategoriesAction,
    },
    dispatch
  );

const ToBeReduxWrapped = connect(mapStateToProps, mapDispatchToProps)(App);

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToBeReduxWrapped />
      </PersistGate>
    </Provider>
  );
}
