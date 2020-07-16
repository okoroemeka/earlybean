import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

const View = props => {
  const {width, height} = props;
  return <StyledView {...props} width={width} height={height} />;
};

export default View;
