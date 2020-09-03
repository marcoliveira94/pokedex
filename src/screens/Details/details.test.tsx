import React from 'react'
import DetailsScreen from './Details.screen'

import renderer from 'react-test-renderer'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../Router'
import { RouteProp } from '@react-navigation/native'

test('renders correctly', () => {
  const navigation = ({
    navigate: jest.fn()
  } as unknown) as StackNavigationProp<RootStackParamList, 'Details'>

  const route = ({ navigate: jest.fn() } as unknown) as RouteProp<
    RootStackParamList,
    'Details'
  >

  const tree = renderer
    .create(<DetailsScreen navigation={navigation} route={route} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
