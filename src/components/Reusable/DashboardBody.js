import React from 'react';
import styled from 'styled-components/native';

const StyledBody = styled.View`
  flex: ${props => props.flexSize || 5};
  padding-bottom: ${props => props.paddingBottom || 0};
`;

const DashboardBody = props => {
  return <StyledBody {...props}>{props.children}</StyledBody>;
};

export default DashboardBody;
