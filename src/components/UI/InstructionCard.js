import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import {colors} from '../../core';
import Touchable from '../UI/Touchable';

const StyledCardWrapper = styled.View`
  width: ${props => props.width || wp('100%')}px;
  height: ${props => props.height || hp('25%')}px;
  margin-bottom: ${props => props.marginBottom || hp('2%')}px;
  background-color: ${props => props.backgroundColor || colors.white};
  border-radius: ${props => props.borderRadius || '30px'};
  overflow: hidden;
  position: relative;
`;

const InstructionCard = ({
  width,
  height,
  children,
  marginBottom,
  handleCardPress,
}) => {
  return (
    <Touchable handleOnpress={handleCardPress}>
      <StyledCardWrapper
        width={width}
        height={height}
        marginBottom={marginBottom}>
        {children}
      </StyledCardWrapper>
    </Touchable>
  );
};

export default InstructionCard;
