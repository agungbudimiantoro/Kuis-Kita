import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { Login } from './src/pages';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
     </NavigationContainer>
  );
}

export default App;