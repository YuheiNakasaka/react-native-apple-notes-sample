import React, { Component } from 'react';
import { Content, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { setCurrentText } from '../../actions/memo';

class MyContent extends Component {
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
            onChangeText={(text) => { this.props.setCurrentText(text); }}
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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentText: text => dispatch(setCurrentText(text)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyContent);
