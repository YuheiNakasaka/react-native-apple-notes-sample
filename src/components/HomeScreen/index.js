import React from 'react';
import { Container } from 'native-base';
import MyHeader from '../HomeScreen/Header';
import MyContent from '../HomeScreen/content';
import MyFooter from '../HomeScreen/Footer';

const App = () => (
  <Container>
    <MyHeader />
    <MyContent />
    <MyFooter />
  </Container>
);

export default App;
