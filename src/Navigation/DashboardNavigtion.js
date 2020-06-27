import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../core';

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        activeBackgroundColor: colors.white,
        style: {
          backGroundColor: `${colors.primary}`,
        },
      }}
    />
  );
};

export default DashboardNavigator;
