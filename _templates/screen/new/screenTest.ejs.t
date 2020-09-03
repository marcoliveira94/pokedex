---
to: src/screens/<%= h.changeCase.camel(name)%>/<%= h.changeCase.camel(name)%>.test.tsx
---
import React from 'react';
import <%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen from './<%= name.charAt(0).toUpperCase() + name.slice(1) %>.screen';

import renderer from 'react-test-renderer';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Router';

test('renders correctly', () => {
  const navigation = ({navigate: jest.fn()} as unknown) as StackNavigationProp<
    RootStackParamList,
    '<%= name.charAt(0).toUpperCase() + name.slice(1) %>'
  >;

  const tree = renderer
    .create(<<%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
