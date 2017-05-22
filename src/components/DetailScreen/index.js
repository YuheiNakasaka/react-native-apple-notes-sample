import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import MyHeader from './Header';
import MyContent from './Content';
import MyFooter from './Footer';

const Detail = props => (
  <Container>
    <MyHeader id={props.id} />
    <MyContent text={props.text} />
    <MyFooter />
  </Container>
);

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Detail;
