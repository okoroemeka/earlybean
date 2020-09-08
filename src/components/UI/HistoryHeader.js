import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import Image from './Image';
import CustomIcon from '../../core/CustomIcon';
import View from '../../components/UI/View';
import Text from '../../components/UI/TextRemade';

const StyledHeader = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${props => props.headerHeight || 'auto'};
  padding-top: ${hp('1%')}px;
  padding-bottom: ${hp('3%')}px;
  background-color: ${colors.primary};
`;
const StyledText = styled.Text`
  width: ${props => props.width || '100%'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-family: ${props => props.fontFamily || 'Avenir'};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;
//********************************* *//
const StyledTitle = styled.View`
  width: 75%;
  height: 100%;
  flex-direction: row;
  margin-left: auto;
`;
const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.color || colors.primary};
`;
const StyledRightIconContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS == 'android' ? hp('0.2%') : hp('0%')}px;
  padding-bottom: ${Platform.OS == 'android' ? hp('4.8%') : hp('2.5%')}px;
  padding-right: ${wp('6%')}px;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledHeadingTextWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const StyledLeftIconContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${Platform.OS == 'android' ? hp('0.5%') : hp('0.3%')}px;
  padding-left: ${Platform.OS == 'ios' ? wp('5%') : wp('4%')}px;
  padding-bottom: ${Platform.OS == 'android' ? hp('4.8%') : hp('2.5%')}px;
`;
const StyledLeftIconsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;
const StyledIconWrapper = styled.View`
  padding-top: ${props => props.paddingTop || hp('0%')}px;
`;

const DashboardHeaderOne = ({
  userFirstName,
  accountId,
  heading,
  subHeading,
  amount,
  headerHeight,
}) => {
  return (
    <StyledHeader headerHeight={headerHeight}>
      <StyledLeftIconContainer>
        <StyledLeftIconsWrapper>
          <StyledIconWrapper
            paddingTop={Platform.OS == 'ios' ? hp('0.5%') : hp('0.8%')}
            marginRight={wp('2.5%')}>
            <Image
              imageUrl={images.drawer}
              imageWidth={5}
              imageHeight={Platform.OS == 'android' ? 1.5 : 1}
            />
          </StyledIconWrapper>

          <Image
            imageUrl={images.notification}
            imageWidth={Platform.OS == 'ios' ? 5 : 5.5}
            imageHeight={Platform.OS == 'ios' ? 2.5 : 3.5}
          />
        </StyledLeftIconsWrapper>
      </StyledLeftIconContainer>
      <StyledTitle>
        <StyledView width="70%">
          <StyledText fontWeight="bold" fontSize={wp('6%')}>
            Hello {userFirstName},
          </StyledText>
          <StyledText width="100%" fontSize={wp('3.5%')} marginTop={hp('0.5%')}>
            Account ID: {accountId}
          </StyledText>
          <StyledText
            fontSize={wp('2.5%')}
            marginTop={Platform.OS == 'ios' ? hp('3%') : hp('4%')}>
            {heading}
          </StyledText>
          <View height="auto" flexDirection="row" marginTop={hp('2%')}>
            <View height="auto" width="50%">
              <Text
                color={colors.white}
                fontSize={wp('2.5%')}
                textAlign="center">
                Family Wallet
              </Text>
              <View
                height="auto"
                width="100%"
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                <CustomIcon name="NairaIcon" size={12} color={colors.white} />
                <Text color={colors.white} fontSize={wp('3%')} width="auto">
                  {amount}
                </Text>
              </View>
            </View>
            <View height="auto" width="50%">
              <Text
                color={colors.white}
                fontSize={wp('2.5%')}
                textAlign="center">
                Kids Balance
              </Text>
              <View
                height="auto"
                width="100%"
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                <CustomIcon name="NairaIcon" size={12} color={colors.white} />
                <Text color={colors.white} fontSize={wp('3%')} width="auto">
                  {amount}
                </Text>
              </View>
            </View>
          </View>
        </StyledView>
        <StyledView width="30%" background="blue">
          <StyledRightIconContainer>
            <CustomIcon name="logo" size={35} color={colors.white} />
          </StyledRightIconContainer>
        </StyledView>
      </StyledTitle>
    </StyledHeader>
  );
};

export default DashboardHeaderOne;
