import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: ${props => props.marginTop || hp('0%')}px;
  margin-bottom: ${props => props.marginBottom || hp('0%')}px;
`;

const View = props => {
  const {width, height, marginTop, marginBottom} = props;
  return (
    <StyledView
      {...props}
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default View;
