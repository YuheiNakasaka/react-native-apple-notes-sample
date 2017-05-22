import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, FooterTab, Left, Body, Right, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import uuidV1 from 'uuid/v1';

class MyFooter extends Component {
  componentDidMount() {
    console.log(uuidV1());
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Left />
          <Body>
            <Text style={{ fontSize: 13 }}>{ this.props.memoData.memoList.length }件のメモ</Text>
          </Body>
          <Right>
            <Button
              dark
              transparent
              style={{ marginBottom: 0, marginLeft: 0 }}
              onPress={() => {
                Actions.detail({ id: uuidV1(), text: '' });
              }}
            >
              <Icon active style={{ color: '#f39c12' }} name="ios-create-outline" />
            </Button>
          </Right>
        </FooterTab>
      </Footer>
    );
  }
}

MyFooter.propTypes = {
  memoData: PropTypes.shape({
    memoList: PropTypes.array.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    memoData: state.memoData,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFooter);
