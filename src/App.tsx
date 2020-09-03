import React from 'react';
import {StatusBar} from 'react-native';
import './configs/i18n.config';
import './configs/axios.config';
import Router from './Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
