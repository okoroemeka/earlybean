import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import WalletScreen from '../Screens/Parent/Wallet';
import TransferMoney from '../Screens/Parent/TransferMoney';
import SavingsPlanScreen from '../Screens/Parent/SavingsPlanScreen';
import TransferToBank from '../Screens/Parent/TransferToBank';
import TransferToChildren from '../Screens/Parent/TransferToChildren';

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
    <Stack.Screen name="TransferToBank" component={TransferToBank} />
    <Stack.Screen name="TransferToChildren" component={TransferToChildren} />
  </Stack.Navigator>
);

export default WalletNavigation;
