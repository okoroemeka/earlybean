import React from 'react';
import styled from 'styled-components/native';

const StyledTouchable = styled.TouchableOpacity``;

const Touchable = ({children, handleOnpress}) => {
  return <StyledTouchable onPress={handleOnpress}>{children}</StyledTouchable>;
};

export default Touchable;
