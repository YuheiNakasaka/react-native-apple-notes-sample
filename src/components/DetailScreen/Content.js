import React, { Component } from 'react';
import { Content, Item, Input } from 'native-base';

export default class MyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 300,
    };
  }

  render() {
    return (
      <Content onLayout={
        (event) => {
          this.setState({ contentHeight: event.nativeEvent.layout.height });
        }}
      >
        <Item regular>
          <Input
            multiline
            onChangeText={(text) => { console.log(text); }}
            style={{
              backgroundColor: '#ffffff',
              height: 'auto',
              maxHeight: this.state.contentHeight,
            }}
          />
        </Item>
      </Content>
    );
  }
}
