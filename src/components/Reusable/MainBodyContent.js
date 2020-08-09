import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledMainContainer = styled.View`
  width: ${props => props.width || '100%'};
  min-height: ${props => props.minHeight || '100%'};
  position: relative;
  background-color: ${props => props.backgroundColor || colors.milkWhite};
  padding-bottom: ${props => props.paddingBottom || 0};
`;

const MainBodyContent = props => {
  return <StyledMainContainer {...props}>{props.children}</StyledMainContainer>;
};

export default MainBodyContent;
