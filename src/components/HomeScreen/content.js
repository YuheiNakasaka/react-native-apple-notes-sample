import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Content, List, ListItem, Body, Text } from 'native-base';
import Momemnt from 'moment';
import { initMemoLists, deleteMemo, setCurrentId } from '../../actions/memo';

class MyContent extends Component {

  componentDidMount() {
    this.props.initMemoLists();
  }

  firstLine(text) {
    const line = text.split(/\n/)[0];
    return line.length > 20 ? `${line.slice(0, 19)}...` : line;
  }

  secondLine(text) {
    const line = text.split(/\n/);
    return line.length > 1 ? line[1] : '追加テキストなし';
  }

  formatTime(time) {
    const today = Momemnt(new Date());
    const date = Momemnt(time);
    const dayDiff = date.diff(today, 'day');
    return dayDiff > 0 ? date.format('YYYY/MM/DD') : date.format('HH:mm');
  }

  sortedByTime(list) {
    return list.sort((x, y) => {
      const unicX = new Date(x.updatedAt).getTime();
      const unicy = new Date(y.updatedAt).getTime();
      if (unicX < unicy) return 1;
      if (unicX > unicy) return -1;
      return 0;
    });
  }

  render() {
    return (
      <Content>
        <List
          dataArray={this.sortedByTime(this.props.memoData.memoList)}
          renderRow={data =>
            (
              <Swipeout
                right={[{
                  text: 'Delete',
                  backgroundColor: 'red',
                  onPress: () => {
                    this.props.setCurrentId(data.id);
                    this.props.deleteMemo();
                  },
                }]}
                autoClose
                backgroundColor="transparent"
              >
                <ListItem
                  button
                  onPress={() => {
                    Actions.detail({ id: data.id, text: data.text });
                  }}
                >
                  <Body>
                    <Text>{ this.firstLine(data.text) }</Text>
                    <Text
                      note
                      style={{
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >{ this.formatTime(data.updatedAt) } { this.secondLine(data.text) }</Text>
                  </Body>
                </ListItem>
              </Swipeout>
            )
          }
        />
      </Content>
    );
  }
}

MyContent.propTypes = {
  initMemoLists: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
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
    deleteMemo: () => dispatch(deleteMemo()),
    setCurrentId: id => dispatch(setCurrentId(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyContent);
