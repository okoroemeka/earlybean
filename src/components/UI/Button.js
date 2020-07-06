import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledButton = styled.TouchableOpacity`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  padding: ${props => props.paddingTopBottom || hp('1%')}px
    ${props => props.paddingLeftRight || wp('6%')}px;
  border-radius: ${props => props.borderRadius || '0px'};
  position: relative;
`;

const Button = ({
  width,
  children,
  borderRadius,
  backgroundColor,
  paddingTopBottom,
  height,
  paddingLeftRight,
  handlePress = () => {},
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      paddingTopBottom={paddingTopBottom}
      borderRadius={borderRadius}
      paddingLeftRight={paddingLeftRight}
      onPress={handlePress}
      backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
