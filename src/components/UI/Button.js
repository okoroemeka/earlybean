import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledButton = styled.TouchableOpacity`
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  padding: ${props => props.paddingTopBottom || hp('1%')}px
    ${props => props.marginLeftRight || wp('6%')}px;
  border-radius: ${props => props.borderRadius || '0px'};
`;

const Button = ({
  width,
  children,
  borderRadius,
  backgroundColor,
  paddingTopBottom,
  marginLeftRight,
  handlePress = () => {},
}) => {
  return (
    <StyledButton
      width={width}
      paddingTopBottom={paddingTopBottom}
      borderRadius={borderRadius}
      onPress={handlePress}
      backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
