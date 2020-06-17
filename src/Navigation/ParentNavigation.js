import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ParentAuthScreenOne from '../Screens/Parent/ParentAuthScreenOne';
const Stack = createStackNavigator();

const ParentNavigation = () => (
  <Stack.Navigator headerMode="none" initialRouteName="ParentAuthScreenOne">
    <Stack.Screen name="ParentAuthScreenOne" component={ParentAuthScreenOne} />
  </Stack.Navigator>
);

export default ParentNavigation;
