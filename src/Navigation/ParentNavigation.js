import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ParentAuthScreenOne from '../Screens/Parent/ParentAuthScreenOne';
import ParentAuthScreenTwo from '../Screens/Parent/ParentAuthScreenTwo';
const Stack = createStackNavigator();

const ParentNavigation = () => (
  <Stack.Navigator headerMode="none" initialRouteName="ParentAuthScreenOne">
    <Stack.Screen name="ParentAuthScreenOne" component={ParentAuthScreenOne} />
    <Stack.Screen name="ParentAuthScreenTwo" component={ParentAuthScreenTwo} />
  </Stack.Navigator>
);

export default ParentNavigation;
