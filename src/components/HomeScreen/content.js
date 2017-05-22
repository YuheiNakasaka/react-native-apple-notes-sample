import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Content, List, ListItem } from 'native-base';
import { initMemoLists } from '../../actions/memo';

class MyContent extends Component {
  componentDidMount() {
    this.props.initMemoLists();
  }

  render() {
    return (
      <Content>
        <List
          dataArray={this.props.memoData.memoList}
          renderRow={data =>
            (
              <ListItem
                button
                onPress={() => {
                  Actions.detail({ id: data.id, text: data.text });
                }}
              >
                <Text>{data.text}</Text>
              </ListItem>
            )
        }
        />
      </Content>
    );
  }
}

MyContent.propTypes = {
  initMemoLists: PropTypes.func.isRequired,
  memoData: PropTypes.shape({
    memoList: PropTypes.array.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    memoData: state.memoData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initMemoLists: () => dispatch(initMemoLists()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyContent);
