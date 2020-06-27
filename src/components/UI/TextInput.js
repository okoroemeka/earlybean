import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  border: ${props => props.border || 'none'};
  width: ${props => props.width || wp('1%')}px;
  height: ${props => props.height || hp('2%')}px;
  padding: ${props => props.paddingTopDown || hp('1')}px
    ${props => props.paddingLeftAndRight || wp('1%')};
`;
const TextInput = ({
  width,
  height,
  color,
  paddingTopDown,
  paddingLeftAndRight,
  placeholder,
}) => {
  return (
    <StyledInput
      width={width}
      height={height}
      color={color}
      paddingTopDown={paddingTopDown}
      paddingLeftAndRight={paddingLeftAndRight}
      onChange={() => {}}
      placeholder={placeholder || ''}
    />
  );
};

export default TextInput;
