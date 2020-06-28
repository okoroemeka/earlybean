import React from 'react';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../core';
import DashboardScreen from '../Screens/Parent/Dashboard';
import CustomIcon from '../core/CustomIcon';
import TabNavHook from '../components/Hooks/TabNavHook';

const StyledTouchable = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-top: ${hp('3.5%')}px;
  padding-bottom: ${hp('1.5%')}px;
  background-color: ${props => props.backgroundColor || colors.primary};
`;

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const [backgroundColor, setBackgroundColor] = TabNavHook(
            colors.white,
          );
          let iconName;
          if (route.name == 'Home') {
            iconName = 'homeIcon';
          }
          if (route.name == 'Save') {
            iconName = 'saveicon';
          }
          if (route.name == 'Kids') {
            iconName = 'kidsIcon';
          }
          if (route.name == 'History') {
            iconName = 'historyIcon';
          }
          if (route.name == 'Wallet') {
            iconName = 'walletIcon';
          }
          return (
            <StyledTouchable
              backgroundColor={focused && backgroundColor}
              onPress={() => setBackgroundColor(colors.white)}>
              <CustomIcon name={iconName} color={color} size={size} />
            </StyledTouchable>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        activeBackgroundColor: colors.primary,
        style: {
          height: Platform.OS == 'ios' ? 110 : 75,
          paddingBottom: Platform.OS == 'ios' ? 40 : 15,
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Save" component={DashboardScreen} />
      <Tab.Screen name="Kids" component={DashboardScreen} />
      <Tab.Screen name="History" component={DashboardScreen} />
      <Tab.Screen name="Wallet" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
