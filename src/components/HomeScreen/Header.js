import React from 'react';
import { Header, Title, Left, Right, Body, Button, Text } from 'native-base';

const MyHeader = () => (
  <Header>
    <Left />
    <Body>
      <Title>メモ</Title>
    </Body>
    <Right>
      <Button dark transparent style={{ marginBottom: 0, marginLeft: 0 }}>
        <Text style={{ color: '#f39c12' }}>編集</Text>
      </Button>
    </Right>
  </Header>
);

export default MyHeader;
