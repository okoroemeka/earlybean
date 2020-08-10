import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import KidsDashboardScreen from '../Screens/Parent/KidsDashboardScreen';
import ViewChildTransactions from '../Screens/Parent/ViewChildTransactions';
import ViewEarningsScreen from '../Screens/Parent/ViewEarningsScreen';

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
    <Stack.Screen
      name="ViewChildTransactions"
      component={ViewChildTransactions}
    />
    <Stack.Screen name="ViewEarningsScreen" component={ViewEarningsScreen} />
  </Stack.Navigator>
);
export default KidsNavigation;
