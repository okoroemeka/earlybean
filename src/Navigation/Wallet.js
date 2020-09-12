import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import WalletScreen from '../Screens/Parent/Wallet';
import TransferMoney from '../Screens/Parent/TransferMoney';
import SavingsPlanScreen from '../Screens/Parent/SavingsPlanScreen';

const Stack = createStackNavigator();

const WalletNavigation = props => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: true,
    }}
    headerMode="none"
    initialRouteName="WalletScreen">
    <Stack.Screen name="WalletScreen" component={WalletScreen} />
    <Stack.Screen name="TransferMoney" component={TransferMoney} />
    <Stack.Screen name="SavingsPlanScreen" component={SavingsPlanScreen} />
  </Stack.Navigator>
);

export default WalletNavigation;
