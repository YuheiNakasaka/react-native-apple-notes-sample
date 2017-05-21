import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Right, Body, Button, Icon, Text } from 'native-base';

const MyHeader = () => (
  <Header>
    <Left>
      <Button
        iconleft
        transparent
        style={{ marginBottom: 0, marginLeft: 0 }}
        onPress={() => { Actions.pop(); }}
      >
        <Icon active style={{ color: '#f39c12' }} name="ios-arrow-back" />
        <Text style={{ color: '#f39c12', marginLeft: 10 }}>メモ</Text>
      </Button>
    </Left>
    <Body />
    <Right>
      <Button
        transparent
        style={{ marginBottom: 0, marginLeft: 0 }}
        onPress={() => { console.log(1); }}
      >
        <Text style={{ color: '#f39c12' }}>完了</Text>
      </Button>
    </Right>
  </Header>
);

export default MyHeader;
