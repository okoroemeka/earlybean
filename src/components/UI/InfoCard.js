import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledCardWrapper = styled.View`
  width: ${props => props.width || wp('100%')}px;
  height: ${props => props.height || hp('25%')}px;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  margin-bottom: ${hp('2%')}px;
  padding: ${props => props.paddingTopDown || hp('1%')}px
    ${props => props.paddingLeftRight || hp('2%')}px;
  background-color: ${props => props.backgroundColor || colors.white};
  border-radius: ${props => props.borderRadius || '50px'};
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.0637566);
`;

const InfoCard = ({
  width,
  height,
  children,
  borderRadius,
  flexDirection,
  paddingLeftRight,
  paddingTopDown,
}) => {
  return (
    <StyledCardWrapper
      width={width}
      height={height}
      paddingTopDown={paddingTopDown}
      paddingLeftRight={paddingLeftRight}
      borderRadius={borderRadius}
      flexDirection={flexDirection}>
      {children}
    </StyledCardWrapper>
  );
};

export default InfoCard;
