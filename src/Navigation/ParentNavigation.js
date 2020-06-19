import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ParentAuthScreenOne from '../Screens/Parent/ParentAuthScreenOne';
import ParentAuthScreenTwo from '../Screens/Parent/ParentAuthScreenTwo';
import ParentAuthScreenThree from '../Screens/Parent/ParentAuthScreenThree';

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
  </Stack.Navigator>
);

export default ParentNavigation;
