import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Welcome from '../Screens/Welcome';
import ParentNavigation from '../Navigation/ParentNavigation';
import ParentAuthScreenOne from '../Screens/Parent/ParentAuthScreenOne';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      // screenOptions={{
      //   ...TransitionPresets.ModalSlideFromBottomIOS,
      // }}
      headerMode="none"
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ParentAuthScreen" component={ParentNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
