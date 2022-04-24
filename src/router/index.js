import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Splash, Register, Home, About, Kuis, Kuis2 } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTab } from '../compontents';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home}  options={{headerShown:false}} />
      <Tab.Screen name="About" component={About} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
   <Stack.Navigator initialRouteName='Splash'>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
       <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
       <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
       <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
       <Stack.Screen name="MyApp" component={MyApp} options={{headerShown:false}} />
       <Stack.Screen name="Kuis" component={Kuis} options={{headerShown:false}} />
       <Stack.Screen name="Kuis2" component={Kuis2} options={{headerShown:false}} />
   </Stack.Navigator>
  );
}

export default Router;
