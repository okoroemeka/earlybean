import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
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
