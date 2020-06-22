import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ParentAuthScreenOne from '../Screens/Parent/ParentAuthScreenOne';
import ParentAuthScreenTwo from '../Screens/Parent/ParentAuthScreenTwo';
import ParentAuthScreenThree from '../Screens/Parent/ParentAuthScreenThree';
import SignUpScreen from '../Screens/Parent/SignUpScreen';
import VerificationScreen from '../Screens/Parent/VerificationScreen';
import ConfirmationScreen from '../Screens/Parent/ConfirmationScreen';

const Stack = createStackNavigator();

const ParentNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
    }}
    headerMode="none"
    initialRouteName="ParentAuthScreenOne">
    <Stack.Screen name="ParentAuthScreenOne" component={ParentAuthScreenOne} />
    <Stack.Screen name="ParentAuthScreenTwo" component={ParentAuthScreenTwo} />
    <Stack.Screen
      name="ParentAuthScreenThree"
      component={ParentAuthScreenThree}
    />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
    <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
  </Stack.Navigator>
);

export default ParentNavigation;
