import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem } from 'native-base';

const datas = [
  {
    route: 'detail',
    text: 'Habu Yoshiharu',
  },
  {
    route: 'detail',
    text: 'Sato Amahiko',
  },
  {
    route: 'detail',
    text: 'Watanabe Akira',
  },
];

const MyContent = () => (
  <Content>
    <List
      dataArray={datas}
      renderRow={data =>
        (
          <ListItem button onPress={() => { Actions[data.route](); }} >
            <Text>{data.text}</Text>
          </ListItem>
        )
    }
    />
  </Content>
);

export default MyContent;
