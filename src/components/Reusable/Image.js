import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: ${props => wp(props.width || 100)}px;
  height: ${props => hp(props.height || 0)}px;
  margin-right: ${props => props.marginRight || wp('0%')}px;
`;

const ImageHelper = ({imageUrl, imageWidth, imageHeight, marginRight}) => {
  return (
    <StyledImage
      source={imageUrl}
      width={imageWidth}
      height={imageHeight}
      marginRight={marginRight}
    />
  );
};

export default ImageHelper;
