import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledButton = styled.TouchableOpacity`
  width: ${props => props.width || 'auto'};
  height: ${props => hp(props.height || 0)}px;
  background-color: ${props => props.backgroundColor || colors.primary};
  padding: ${hp('1%')}px ${wp('6%')}px;
  border-radius: ${props => props.borderRadius || '0px'};
`;

const Button = ({width, height, children, borderRadius}) => {
  return (
    <StyledButton width={width} height={height} borderRadius={borderRadius}>
      {children}
    </StyledButton>
  );
};

export default Button;
