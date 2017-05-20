import React from 'react';
import { Footer, FooterTab, Left, Body, Right, Button, Icon, Text } from 'native-base';

const MyFooter = () => (
  <Footer>
    <FooterTab>
      <Left />
      <Body>
        <Text style={{ fontSize: 13 }}>0件のメモ</Text>
      </Body>
      <Right>
        <Button dark transparent style={{ marginBottom: 0, marginLeft: 0 }}>
          <Icon active style={{ color: '#f39c12' }} name="ios-create-outline" />
        </Button>
      </Right>
    </FooterTab>
  </Footer>
);

export default MyFooter;
