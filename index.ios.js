import React from 'react';
import {
  AppRegistry,
} from 'react-native';

// import { Provider } from 'react-redux';
// import configureStore from './src/configureStore';
import App from './src/components/HomeScreen/index';

// const store = configureStore();

const ReactNativeMemoSample = () => (
  // <Provider store={store}>
  <App />
  // </Provider>
);

AppRegistry.registerComponent('ReactNativeMemoSample', () => ReactNativeMemoSample);
