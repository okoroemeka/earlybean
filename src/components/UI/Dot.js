import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../core';

const StyledDot = styled.View`
  width: ${props => props.width || '5px'};
  height: ${props => props.height || '5px'};
  border-radius: ${props => props.borderRadius || '2px'};
  background-color: ${props => props.borderColor || colors.primary};
`;
const Dot = ({dotWidth, dotHeight}) => {
  return <StyledDot width={dotWidth} height={dotHeight} />;
};

export default Dot;
