import React from 'react'
import HomeScreen from './Home.screen'

import renderer from 'react-test-renderer'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../Router'
import { RouteProp } from '@react-navigation/native'

test('renders correctly', () => {
  const navigation = ({
    navigate: jest.fn()
  } as unknown) as StackNavigationProp<RootStackParamList, 'Home'>

  const route = ({ navigate: jest.fn() } as unknown) as RouteProp<
    RootStackParamList,
    'Home'
  >

  const tree = renderer
    .create(<HomeScreen navigation={navigation} route={route} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
