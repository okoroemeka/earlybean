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
import Button from '../../components/UI/Button';
import Line from '../../components/UI/Line';
import CardWrapperWithHeader from '../../components/Reusable/CardWrapperWithHeader';

const StyledWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 125;
`;
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
  background-color: ${Platform.OS == 'android' ? colors.milkWhite : '#FEFEFE'};
`;
const StyledCardWrapper = styled.View`
  width: 100%;
  height: ${Platform.OS == 'ios' ? hp('15%') : hp('20%')}px;
  margin-top: ${props => props.marginTop || hp('4%')}px;
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
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const StyledView = styled.View`
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.paddingTopDown || hp('0%')}px
    ${props => props.paddingLeftRight || wp('0%')}px;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

const StyledSummeryCard = styled.View`
  width: 100%;
  height: ${Platform.OS == 'ios' ? hp('45%') : hp('50%')}px;
  border-radius: 50px;
  padding: ${hp('2%')}px ${wp('10%')}px;
  background-color: ${colors.white};
  margin-bottom: ${Platform.OS == 'ios' ? hp('0%') : hp('5%')}px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.067566);
`;
const StyledDebitCardArea = styled.View`
  flex-direction: row;
  width: 100%;
`;
const StyledDebit = styled.View`
  width: ${Platform.OS == 'android' ? wp('5.5%') : wp('5%')}px;
  height: ${Platform.OS == 'android' ? hp('1.5%') : hp('1.2%')}px;
  justify-content: center;
  margin-top: ${Platform.OS == 'android' ? hp('0.5%') : hp('0.3%')}px;
  margin-left: ${wp('0.5%')}px;
`;
const ViewChildCashTrust = ({handleDisplayCashTrust}) => {
  return (
    <CardWrapperWithHeader
      handleDisplayCashTrust={handleDisplayCashTrust}
      headerText={`${'Zara'}'s cash trust`}>
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
      <StyledSummeryCard>
        <StyledView height="19%" flexDirection="row" alignItems="center">
          <StyledView width="50%">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('3%')}
              textAlign="left">
              PLAN SUMMERY
            </TextRemade>
            <TextRemade
              color={colors.greenBrand}
              fontSize={wp('2.5%')}
              textAlign="left">
              N25,000/month
            </TextRemade>
          </StyledView>
          <StyledView width="50%" alignItems="flex-end">
            <Button
              backgroundColor={colors.white}
              borderColor={colors.primary}
              borderWidth="1px"
              borderRadius="10px"
              paddingTopBottom={Platform.OS == 'ios' ? hp('0.8%') : hp('1%')}
              width="60%">
              <TextRemade color={colors.primary} fontSize={wp('3.5%')}>
                Edit
              </TextRemade>
            </Button>
          </StyledView>
        </StyledView>
        <Line height="1%" />
        <StyledView height="19%" flexDirection="row" alignItems="center">
          <StyledView width="70%">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              BENEFICIARY
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              Zara Lawson
            </TextRemade>
          </StyledView>
          <StyledView width="30%" alignItems="flex-end">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              START DATE
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              June 24, 2020
            </TextRemade>
          </StyledView>
        </StyledView>
        <StyledView height="19%" flexDirection="row" alignItems="center">
          <StyledView width="70%">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              FREQUENCY
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              monthly
            </TextRemade>
          </StyledView>
          <StyledView width="30%" alignItems="flex-end">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              RELEASE CLAUSE
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              21st birthday
            </TextRemade>
          </StyledView>
        </StyledView>
        <StyledView height="19%" flexDirection="row" alignItems="center">
          <StyledView width="70%">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              AUTOMATION STATUS
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              Automated
            </TextRemade>
          </StyledView>
          <StyledView width="30%" alignItems="flex-end">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              INTEREST P.A
            </TextRemade>
            <TextRemade
              color={colors.black}
              fontSize={wp('3%')}
              textAlign="left">
              5%
            </TextRemade>
          </StyledView>
        </StyledView>
        <StyledView height="19%" flexDirection="row" alignItems="center">
          <StyledView width="70%" justifyContent="flex-start">
            <TextRemade
              color={colors.placeholderColor}
              fontSize={wp('2.5%')}
              textAlign="left">
              DEBIT CARD
            </TextRemade>
            <StyledDebitCardArea>
              <TextRemade
                color={colors.black}
                fontSize={wp('3%')}
                width="auto"
                textAlign="left">
                0808
              </TextRemade>
              <StyledDebit>
                <StyledImage source={images.masterCard} resizeMode="contain" />
              </StyledDebit>
            </StyledDebitCardArea>
          </StyledView>
        </StyledView>
      </StyledSummeryCard>
    </CardWrapperWithHeader>
  );
};

export default ViewChildCashTrust;
