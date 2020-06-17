import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-size: ${props => props.fontSize || wp('4%')}px;
  margin-top: ${props => props.marginTop || hp('0%')}px;
  line-height: ${props => props.lineHeight || hp('4%')}px;
`;

const TextHelper = ({
  textAlign,
  fontSize,
  color,
  children,
  width,
  marginTop,
  lineHeight,
}) => {
  return (
    <StyledText
      textAlign={textAlign}
      fontSize={fontSize}
      color={color}
      width={width}
      marginTop={marginTop}
      lineHeight={lineHeight}>
      {children}
    </StyledText>
  );
};

export default TextHelper;
