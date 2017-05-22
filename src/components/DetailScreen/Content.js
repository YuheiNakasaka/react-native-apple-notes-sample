import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    this.props.setCurrentText(this.props.text);
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
            autoFocus
            multiline
            value={this.props.memoData.text}
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

MyContent.defaultProps = {
  text: '',
};

MyContent.propTypes = {
  text: PropTypes.string,
  setCurrentText: PropTypes.func.isRequired,
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
    setCurrentText: text => dispatch(setCurrentText(text)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyContent);
