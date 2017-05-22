import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, FooterTab, Left, Body, Right, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteMemo } from '../../actions/memo';

class MyFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Left>
            <Button
              transparent
              style={{ marginBottom: 0, marginLeft: 0 }}
              onPress={() => {
                this.props.deleteMemo();
                Actions.pop();
              }}
            >
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
  }
}

MyFooter.propTypes = {
  deleteMemo: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMemo: () => dispatch(deleteMemo()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFooter);
