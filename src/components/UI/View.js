import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  padding-right: ${props => props.paddingRight || wp('0%')}px;
  padding-left: ${props => props.paddingLeft || wp('0%')}px;
  padding-top: ${props => props.paddingTop || hp('0%')}px;
  padding-bottom: ${props => props.paddingBottomi || hp('0%')}px;
  margin-top: ${props => props.marginTop || hp('0%')}px;
  margin-bottom: ${props => props.marginBottom || hp('0%')}px;
  margin-right: ${props => props.marginRight || wp('0%')}px;
  margin-left: ${props => props.marginLeft || wp('0%')}px;
`;

const View = props => {
  const {width, height, marginTop, marginBottom, children} = props;
  return (
    <StyledView
      {...props}
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      {children}
    </StyledView>
  );
};

export default View;
