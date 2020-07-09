import React, {Fragment} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import BackIcon from '../../components/UI/BackIcon';
import CustomIcon from '../../core/CustomIcon';
import RoundButton from '../../components/UI/RoundButton';
import Dot from '../../components/UI/Dot';
// import Image from '../../components/UI/Image';

const StyledWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 125;
`;
// const StyledSubWrapper = styled.ScrollView``;
const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;
const StyledHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${wp('5%')}px;
  background-color: ${colors.primary};
`;
const StyledBody = styled.View`
  flex: 10;
  background-color: ${colors.white};
  padding: ${hp('4%')}px ${wp('5%')}px;
`;
const StyledCardWrapper = styled.View`
  width: 100%;
  height: ${Platform.OS == 'ios' ? hp('15%') : hp('20%')}px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;
const StyledTextWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: transparent;
`;
const StyledTouchable = styled.TouchableOpacity``;
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const StyledView = styled.View`
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  padding: ${props => props.paddingTopDown || hp('0%')}px
    ${props => props.paddingLeftRight || wp('0%')}px;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;
const StyledDot = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 2px;
  background-color: ${colors.primary};
`;
const ViewChildCashTrust = ({handleDisplayCashTrust}) => {
  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledWrapper>
        <StyledHeader>
          <BackIcon handleBackButtonPress={handleDisplayCashTrust} />
          <TextRemade width="auto">{`${'Zara'}'s cash trust`}</TextRemade>
          <CustomIcon name="logo" color="white" size={30} />
        </StyledHeader>
        <StyledBody>
          <StyledCardWrapper>
            <StyledImage source={images.topUPImage} resizeMode="cover" />
            <StyledTextWrapper>
              <StyledView
                width="50%"
                paddingTopDown={hp('3%')}
                paddingLeftRight={wp('7%')}>
                <StyledView height="50%">
                  <TextRemade
                    fontSize={wp('3%')}
                    color={colors.primary}
                    textAlign="left">
                    Balance
                  </TextRemade>
                  <TextRemade
                    fontSize={wp('4.3%')}
                    fontWeight="bold"
                    color={colors.primary}
                    textAlign="left">
                    N500,000
                  </TextRemade>
                </StyledView>
                <StyledView height="50%" justifyContent="flex-end">
                  <TextRemade
                    fontSize={wp('2.5%')}
                    color={colors.primary}
                    textAlign="left">
                    1.5% earned in the last 6 months
                  </TextRemade>
                </StyledView>
              </StyledView>
              <StyledView
                width="50%"
                justifyContent="flex-end"
                paddingTopDown={hp('2%')}
                paddingLeftRight={wp('7%')}>
                <TextRemade
                  fontSize={wp('2.5%')}
                  color={colors.primary}
                  textAlign="right">
                  Time left till release
                </TextRemade>
                <TextRemade
                  fontSize={wp('4.1%')}
                  color={colors.primary}
                  textAlign="right">
                  5 Years
                </TextRemade>
              </StyledView>
            </StyledTextWrapper>
          </StyledCardWrapper>
          <StyledView
            height="auto"
            flexDirection="row"
            justifyContent="space-between"
            paddingLeftRight={wp('4%')}
            paddingTopDown={hp('3%')}>
            <StyledView width="20%" height="auto">
              <RoundButton
                backgroundColor={colors.buttonColor}
                buttonBorderRadius="20px"
                buttonWidth="40px"
                buttonHeight="40px">
                <CustomIcon name="plus" size={20} color={colors.primary} />
              </RoundButton>
            </StyledView>
            <StyledView width="20%" height="auto">
              <RoundButton
                backgroundColor={colors.buttonColor}
                buttonBorderRadius="20px"
                buttonWidth="40px"
                buttonHeight="40px">
                <CustomIcon name="up-arrow" size={20} color={colors.primary} />
              </RoundButton>
            </StyledView>
            <StyledView width="20%" height="auto">
              <RoundButton
                backgroundColor={colors.buttonColor}
                buttonBorderRadius="20px"
                buttonWidth="40px"
                buttonHeight="40px">
                <StyledView
                  flexDirection="row"
                  justifyContent="space-around"
                  paddingLeftRight={wp('1.3%')}>
                  <Dot />
                  <Dot />
                  <Dot />
                </StyledView>
              </RoundButton>
            </StyledView>
          </StyledView>
        </StyledBody>
      </StyledWrapper>
    </Fragment>
  );
};

export default ViewChildCashTrust;
