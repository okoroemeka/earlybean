import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../Screens/Child/Login';
import WelcomeScreenOne from '../Screens/Child/WelcomeScreenOne';
import WelcomeScreenTwo from '../Screens/Child/WelcomeScreenTwo';
import VerificationScreen from '../Screens/Child/VerificationScreen';
import WelcomeScreenThree from '../Screens/Child/WelcomeScreenThree';

const Stack = createStackNavigator();

const ChildNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
    }}
    headerMode="none">
    <Stack.Screen name="WelcomeScreenOne" component={WelcomeScreenOne} />
    <Stack.Screen name="WelcomeScreenTwo" component={WelcomeScreenTwo} />
    <Stack.Screen name="WelcomeScreenThree" component={WelcomeScreenThree} />
    <Stack.Screen name="LoginScreen" component={Login} />
    <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
  </Stack.Navigator>
);

export default ChildNavigation;
