import React from 'react';
import { Container } from 'native-base';
import MyHeader from './Header';
import MyContent from './Content';
import MyFooter from './Footer';

const Detail = props => (
  <Container>
    <MyHeader id={props.id} />
    <MyContent />
    <MyFooter />
  </Container>
);

export default Detail;
