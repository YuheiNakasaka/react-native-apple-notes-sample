import React from 'react';
import { Header, Title, Left, Right, Body } from 'native-base';

const MyHeader = () => (
  <Header>
    <Left />
    <Body>
      <Title>メモ</Title>
    </Body>
    <Right />
  </Header>
);

export default MyHeader;
