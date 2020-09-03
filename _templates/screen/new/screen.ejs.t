---
to: src/screens/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/<%= name.charAt(0).toUpperCase() + name.slice(1) %>.screen.tsx
---
import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Router';

interface <%= name.charAt(0).toUpperCase() + name.slice(1) %>ScreenProps {
  navigation: StackNavigationProp<RootStackParamList, '<%= name.charAt(0).toUpperCase() + name.slice(1) %>'>;
}

const <%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen = ({navigation}: <%= name.charAt(0).toUpperCase() + name.slice(1) %>ScreenProps) => {
  return (
    <<%= name.charAt(0).toUpperCase() + name.slice(1) %>View>
      <Text><%= name.charAt(0).toUpperCase() + name.slice(1) %> Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </<%= name.charAt(0).toUpperCase() + name.slice(1) %>View>
  );
};

export default <%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen;

const <%= name.charAt(0).toUpperCase() + name.slice(1) %>View = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
