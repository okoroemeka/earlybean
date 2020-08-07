import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {colors} from '../../core';

const StyledHeader = styled.View`
  flex: ${props => (props.flexSize || Platform.OS == 'ios' ? 2 : 3)};
  background-color: ${colors.primary};
`;
const DashboardHeaderContainer = props => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default DashboardHeaderContainer;
