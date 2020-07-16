import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import DashboardSaveScreen from '../Screens/Parent/DashboardSaveScreen';
import ViewChildCashTrustScreen from '../Screens/Parent/ViewChildCashTrust';
import CashTrustDashboardScreen from '../Screens/Parent/CashTrustDashboard';
import TopExistingSavingScreen from '../Screens/Parent/TopExistingSaving';
import CreateSavingsPlanFormScreen from '../Screens/Parent/CreateSavingsPlanFormScreen';
import CreateCashTrustFormScreen from '../Screens/Parent/CreateCashTrustFormScreen';

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
      component={ViewChildCashTrustScreen}
    />
    <Stack.Screen
      name="CashTrustDashboardScreen"
      component={CashTrustDashboardScreen}
    />
    <Stack.Screen
      name="TopExistingSavingScreen"
      component={TopExistingSavingScreen}
    />
    <Stack.Screen
      name="CreateSavingsPlanFormScreen"
      component={CreateSavingsPlanFormScreen}
    />
    <Stack.Screen
      name="CreateCashTrustFormScreen"
      component={CreateCashTrustFormScreen}
    />
  </Stack.Navigator>
);
export default SavingsNavigation;
