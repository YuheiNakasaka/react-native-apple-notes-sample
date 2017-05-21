import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/HomeScreen/index';
import Detail from './components/DetailScreen/index';

const App = () => (
  <Router>
    <Scene key="home" component={Home} hideNavBar initial />
    <Scene key="detail" component={Detail} />
  </Router>
);

export default App;
