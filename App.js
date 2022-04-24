import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { reducer } from './src/redux';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Router />
     </NavigationContainer>
     </Provider>
  );
}

export default App;