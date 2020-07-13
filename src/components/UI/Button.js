import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledButton = styled.TouchableOpacity`
  flex-direction: ${props => props.flexDirection || 'column'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  padding: ${props => props.paddingTopBottom || hp('1%')}px
    ${props => props.paddingLeftRight || wp('6%')}px;
  border-color: ${props => props.borderColor || 'transparent'};
  border-radius: ${props => props.borderRadius || '0px'};
  border-width: ${props => props.borderWidth || '0px'};
  position: relative;
`;

const Button = ({
  width,
  children,
  borderRadius,
  backgroundColor,
  paddingTopBottom,
  borderWidth,
  height,
  paddingLeftRight,
  handlePress = () => {},
  borderColor,
  flexDirection,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      paddingTopBottom={paddingTopBottom}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      paddingLeftRight={paddingLeftRight}
      flexDirection={flexDirection}
      onPress={handlePress}
      backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
