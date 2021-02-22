import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ShopNavigator from './navigation/ShopNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    'balsamiq-regular': require('./constants/fonts/Balsamiq_Sans/BalsamiqSans-Regular.ttf'),
    'balsamiq-bold': require('./constants/fonts/Balsamiq_Sans/BalsamiqSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setfontsLoaded(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <ShopNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
