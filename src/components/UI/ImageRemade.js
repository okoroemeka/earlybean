import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
`;

const ImageHelper = props => {
  const {imageUrl, imageWidth, imageHeight} = props;
  return (
    <StyledImage
      {...props}
      source={imageUrl}
      width={imageWidth}
      height={imageHeight}
    />
  );
};

export default ImageHelper;
