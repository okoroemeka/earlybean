import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-family: 'LucidaGrande';
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  line-height: ${props => props.lineHeight || hp('4%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;

const TextHelper = ({
  textAlign,
  fontSize,
  color,
  children,
  width,
  marginTop,
  lineHeight,
  borderBottomWidth,
  fontStyle,
}) => {
  return (
    <StyledText
      textAlign={textAlign}
      fontSize={fontSize}
      color={color}
      width={width}
      marginTop={marginTop}
      lineHeight={lineHeight}
      borderBottomWidth={borderBottomWidth}
      fontStyle={fontStyle}>
      {children}
    </StyledText>
  );
};

export default TextHelper;
