import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledContainer = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: ${colors.modalColor};
`;

const ModalContainer = props => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default ModalContainer;
