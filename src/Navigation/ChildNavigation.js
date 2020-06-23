import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../Screens/Child/Login';
import WelcomeScreenOne from '../Screens/Child/WelcomeScreenOne';
import WelcomeScreenTwo from '../Screens/Child/WelcomeScreenTwo';

const Stack = createStackNavigator();

const ChildNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
    }}
    headerMode="none">
    <Stack.Screen name="WelcomeScreenOne" component={WelcomeScreenOne} />
    <Stack.Screen name="WelcomeScreenTwo" component={WelcomeScreenTwo} />
    <Stack.Screen name="LoginScreen" component={Login} />
  </Stack.Navigator>
);

export default ChildNavigation;
