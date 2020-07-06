import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import InfoCard from '../../components/UI/InfoCard';
import {colors} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import CustomIcon from '../../core/CustomIcon';
import Line from '../UI/Line';

const StyledChildCardWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.marginTop || hp('1%')}px;
`;
const StyledImageSection = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledImageWrapper = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${colors.placeholderColor};
  overflow: hidden;
`;
const StyledDetailsSection = styled.View`
  flex: 1;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  padding-top: ${props => props.paddingTop || hp('0%')}px;
  position: relative;
`;
const StyledCustomIconContainer = styled.View`
  padding-left: ${wp('1%')}px;
`;
const CreatTrustCard = ({userAvater, userName, amount, interestRate}) => {
  return (
    <StyledChildCardWrapper>
      <InfoCard
        width={wp('90%')}
        height={hp(Platform.OS == 'ios' ? '11%' : '14%')}
        borderRadius="12px"
        flexDirection="row"
        paddingTopDown={hp('1%')}
        justifyContent="flex-start">
        <StyledImageSection>
          <StyledImageWrapper>
            <StyledImage source={userAvater} />
          </StyledImageWrapper>
        </StyledImageSection>
        <StyledDetailsSection>
          <StyledView
            height="40%"
            alignItems="center"
            paddingTop={Platform.OS == 'android' ? hp('1.8%') : hp('1.5%')}>
            <TextRemade
              color={colors.black}
              textAlign="left"
              textTransform="capitalize"
              width="auto"
              maxWidth="80%"
              fontSize={wp('3%')}>
              {`${userName}\'s cash trust`}
            </TextRemade>
            <StyledCustomIconContainer>
              <CustomIcon name="lock" size={8} color={colors.greenBrand} />
            </StyledCustomIconContainer>
          </StyledView>
          <Line />
          <StyledView
            height="60%"
            paddingTop={Platform.OS == 'android' ? hp('1%') : hp('1.2%')}>
            <StyledView
              height="100%"
              width="50%"
              alignItems="flex-end"
              flexDirection="column">
              <TextRemade
                color={colors.black}
                textAlign="left"
                width="100%"
                fontSize={wp('3%')}>
                {amount}
              </TextRemade>
              <TextRemade
                color={colors.placeholderColor}
                textAlign="left"
                width="100%"
                textTransform="capitalize"
                fontSize={wp('2.5%')}>
                Balance
              </TextRemade>
            </StyledView>
            <StyledView
              height="100%"
              width="50%"
              alignItems="flex-start"
              flexDirection="column">
              <TextRemade
                textAlign="right"
                width="100%"
                fontSize={wp('3%')}
                color={colors.greenBrand}>
                {interestRate}
              </TextRemade>
              <TextRemade
                color={colors.placeholderColor}
                textAlign="right"
                width="100%"
                fontSize={wp('2.5%')}>
                interest p.a
              </TextRemade>
            </StyledView>
          </StyledView>
        </StyledDetailsSection>
      </InfoCard>
    </StyledChildCardWrapper>
  );
};

export default CreatTrustCard;
