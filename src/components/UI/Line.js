import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../core';

const StyledLine = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '0%'};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.borderColor || colors.placeholderColor};
`;
const Line = props => {
  const {width, height, borderColor} = props;
  return (
    <StyledLine
      width={width}
      height={height}
      borderColor={borderColor}
      {...props}
    />
  );
};

export default Line;
