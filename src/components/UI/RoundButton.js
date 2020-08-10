import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../core/index';

const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  border-radius: ${props => props.borderRadius || '0px'};
`;
const RoundButton = props => {
  const {
    buttonWidth,
    buttonHeight,
    buttonBorderRadius,
    handlePress = () => null,
    backgroundColor,
    children,
  } = props;
  return (
    <StyledButton
      {...props}
      backgroundColor={backgroundColor}
      onPress={handlePress}
      borderRadius={buttonBorderRadius}
      width={buttonWidth}
      height={buttonHeight}>
      {children}
    </StyledButton>
  );
};

export default RoundButton;
