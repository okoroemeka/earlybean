import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import DashboardSaveScreen from '../Screens/Parent/DashboardSaveScreen';
import ViewChildCashTrust from '../Screens/Parent/ViewChildCashTrust';
import CashTrustDashboardScreen from '../Screens/Parent/CashTrustDashboard';
import TopExistingSaving from '../Screens/Parent/TopExistingSaving';

const Stack = createStackNavigator();

const SavingsNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: true,
    }}
    headerMode="none"
    initialRouteName="DashboardSaveScreen">
    <Stack.Screen name="DashboardSaveScreen" component={DashboardSaveScreen} />
    <Stack.Screen
      name="ViewChildCashTrustScreen"
      component={ViewChildCashTrust}
    />
    <Stack.Screen
      name="CashTrustDashboardScreen"
      component={CashTrustDashboardScreen}
    />
    <Stack.Screen
      name="TopExistingSavingScreen"
      component={TopExistingSaving}
    />
  </Stack.Navigator>
);

export default SavingsNavigation;
