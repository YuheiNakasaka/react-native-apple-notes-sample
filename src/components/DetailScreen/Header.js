import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Keyboard } from 'react-native';
import { Header, Left, Right, Body, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { setCurrentId, updateMemo } from '../../actions/memo';

class MyHeader extends Component {
  componentDidMount() {
    this.props.setCurrentId(this.props.id);
  }

  backBtnHander() {
    const { text } = this.props.memoData;
    if (text.length > 0) {
      this.props.updateMemo();
    }
    Actions.pop();
  }

  render() {
    return (
      <Header>
        <Left>
          <Button
            iconleft
            transparent
            style={{ marginBottom: 0, marginLeft: 0 }}
            onPress={() => { this.backBtnHander(); }}
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
              Keyboard.dismiss();
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
  memoData: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    memoData: state.memoData,
  };
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
