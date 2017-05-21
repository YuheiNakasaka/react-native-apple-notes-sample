import React from 'react';
import { Footer, FooterTab, Left, Body, Right, Button, Icon } from 'native-base';

const MyFooter = () => (
  <Footer>
    <FooterTab>
      <Left>
        <Button transparent style={{ marginBottom: 0, marginLeft: 0 }}>
          <Icon active style={{ color: '#f39c12' }} name="ios-trash-outline" />
        </Button>
      </Left>
      <Body>
        <Button transparent full>
          <Icon active style={{ color: '#f39c12' }} name="ios-share-outline" />
        </Button>
      </Body>
      <Right>
        <Button transparent style={{ marginBottom: 0, marginLeft: 0 }}>
          <Icon active style={{ color: '#f39c12' }} name="ios-create-outline" />
        </Button>
      </Right>
    </FooterTab>
  </Footer>
);

export default MyFooter;
