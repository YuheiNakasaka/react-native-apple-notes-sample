import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Content, List, ListItem, Body, Item, Text, Input, Button, Icon } from 'native-base';
import Momemnt from 'moment';
import { initMemoLists, searchMemoLists, deleteMemo, setCurrentId, setCurrentSearchWord, clearCurrentSearchWord } from '../../actions/memo';

class MyContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focusingInput: false,
    };
  }

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

  renderCancel() {
    if (this.state.focusingInput) {
      return (
        <Button
          onPress={() => {
            this.props.initMemoLists();
            this.props.clearCurrentSearchWord();
          }}
          style={{ height: 30, backgroundColor: 'transparent' }}
        >
          <Text style={{ fontSize: 12, color: '#f39c12' }}>キャンセル</Text>
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <Content>
        <Item
          style={{ padding: 5 }}
        >
          <Body
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#eee',
              borderRadius: 5,
            }}
          >
            <Icon
              name="ios-search-outline"
              style={{
                marginLeft: 5,
                paddingTop: 2,
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 14,
              }}
            />
            <Input
              value={this.props.memoData.searchWord}
              placeholder="検索"
              placeholderTextColor="#999"
              onFocus={() => {
                this.setState({ focusingInput: true });
              }}
              onBlur={() => {
                this.setState({ focusingInput: false });
                this.props.initMemoLists();
                this.props.clearCurrentSearchWord();
              }}
              onChangeText={(text) => {
                this.props.setCurrentSearchWord(text);
                this.props.searchMemoLists();
              }}
              style={{
                height: 30,
                paddingTop: 2,
                fontSize: 12,
              }}
            />
            { this.renderCancel() }
          </Body>
        </Item>
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
  searchMemoLists: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  setCurrentSearchWord: PropTypes.func.isRequired,
  clearCurrentSearchWord: PropTypes.func.isRequired,
  memoData: PropTypes.shape({
    searchWord: PropTypes.string.isRequired,
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
    searchMemoLists: () => dispatch(searchMemoLists()),
    deleteMemo: () => dispatch(deleteMemo()),
    setCurrentId: id => dispatch(setCurrentId(id)),
    setCurrentSearchWord: word => dispatch(setCurrentSearchWord(word)),
    clearCurrentSearchWord: () => dispatch(clearCurrentSearchWord()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyContent);
