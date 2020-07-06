import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../core';

const StyledText = styled.Text`
  min-width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-family: ${props => props.fontFamily || 'Avenir'};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-transform: ${props => props.textTransform || 'none'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;

const TextWithoutLineHeight = ({
  width,
  textAlign,
  fontFamily,
  color,
  fontSize,
  fontStyle,
  fontWeight,
  marginTop,
  borderBottomWidth,
  borderBottomcolor,
  children,
  textTransform,
  maxWidth,
}) => {
  return (
    <StyledText
      width={width}
      textAlign={textAlign}
      fontFamily={fontFamily}
      color={color}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      marginTop={marginTop}
      borderBottomWidth={borderBottomWidth}
      maxWidth={maxWidth}
      textTransform={textTransform}
      borderBottomcolor={borderBottomcolor}>
      {children}
    </StyledText>
  );
};

export default TextWithoutLineHeight;
