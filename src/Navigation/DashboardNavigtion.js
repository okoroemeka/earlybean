import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../core';
import DashboardScreen from '../Screens/Parent/Dashboard';
import SavingsNavigation from './SavingsNavigation';
import KidsNagation from './KidsNagation';
import History from '../Screens/Parent/History';
import CustomIcon from '../core/CustomIcon';

const StyledTouchable = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-top: ${hp('2%')}px;
  background-color: ${props => props.backgroundColor || colors.primary};
`;
const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: ${hp('2.5%')}px;
  background-color: ${colors.primary};
`;
const StyledText = styled.Text`
  color: ${props => props.color || colors.white};
  font-size: ${wp('3%')}px;
  margin-top: ${hp('0.6%')}px;
`;

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <StyledView>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let iconName;
        if (label == 'Home') {
          iconName = 'homeIcon';
        }
        if (label == 'Save') {
          iconName = 'saveicon';
        }
        if (label == 'Kids') {
          iconName = 'kidsIcon';
        }
        if (label == 'History') {
          iconName = 'historyIcon';
        }
        if (label == 'Wallet') {
          iconName = 'walletIcon';
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <StyledTouchable
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            backgroundColor={isFocused && colors.white}>
            <CustomIcon
              name={iconName}
              color={isFocused ? colors.primary : colors.white}
              size={20}
            />
            <StyledText color={isFocused ? colors.primary : colors.white}>
              {label}
            </StyledText>
          </StyledTouchable>
        );
      })}
    </StyledView>
  );
}

const DashboardNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Save" component={SavingsNavigation} />
      <Tab.Screen name="Kids" component={KidsNagation} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Wallet" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
