import React from 'react';
import { Container } from 'native-base';
import MyHeader from './Header';
import MyContent from './Content';
import MyFooter from './Footer';

const Home = () => (
  <Container>
    <MyHeader />
    <MyContent />
    <MyFooter />
  </Container>
);

export default Home;
