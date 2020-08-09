import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${props => props?.backgroundColor || colors.primary};
`;

const HeaderStatus = props => {
  return <StyledHeaderStatus {...props} />;
};

export default HeaderStatus;
