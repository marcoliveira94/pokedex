import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesEnum} from './models/routes.enum';

// Routes Import
import DetailsScreen from './screens/Details/Details.screen';
import HomeScreen from './screens/Home/Home.screen';
import {Pokemon} from './models/pokemonList.type';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Fact: undefined;
  Details: Pokemon | undefined;
  Home: undefined;
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RoutesEnum.HOME} component={HomeScreen} />
        <Stack.Screen name={RoutesEnum.DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
