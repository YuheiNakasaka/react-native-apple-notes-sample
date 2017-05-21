import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem } from 'native-base';

const datas = [
  {
    route: 'detail',
    text: 'Habu Yoshiharu',
    id: 1,
  },
  {
    route: 'detail',
    text: 'Sato Amahiko',
    id: 2,
  },
  {
    route: 'detail',
    text: 'Watanabe Akira',
    id: 3,
  },
];

const MyContent = () => (
  <Content>
    <List
      dataArray={datas}
      renderRow={data =>
        (
          <ListItem button onPress={() => { Actions[data.route]({ id: data.id }); }} >
            <Text>{data.text}</Text>
          </ListItem>
        )
    }
    />
  </Content>
);

export default MyContent;
