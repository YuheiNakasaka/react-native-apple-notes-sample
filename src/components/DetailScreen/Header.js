import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Right, Body, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { setCurrentId, updateMemo } from '../../actions/memo';

class MyHeader extends Component {
  componentDidMount() {
    this.props.setCurrentId(this.props.id);
  }

  render() {
    return (
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
            onPress={() => {
              this.props.updateMemo();
              Actions.pop();
            }}
          >
            <Text style={{ color: '#f39c12' }}>完了</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

MyHeader.propTypes = {
  id: PropTypes.string.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  updateMemo: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentId: id => dispatch(setCurrentId(id)),
    updateMemo: () => dispatch(updateMemo()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyHeader);
