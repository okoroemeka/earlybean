import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import KidsDashboardScreen from '../Screens/Parent/KidsDashboardScreen';

const Stack = createStackNavigator();

const KidsNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: true,
    }}
    headerMode="none"
    initialRouteName="KidsDashboardScreen">
    <Stack.Screen name="KidsDashboardScreen" component={KidsDashboardScreen} />
  </Stack.Navigator>
);
export default KidsNavigation;
