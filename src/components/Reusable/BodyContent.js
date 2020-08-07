import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyledBodyContent = styled.ScrollView`
  padding: ${hp('0%')}px ${wp('3%')}px;
`;
const BodyContent = props => {
  return <StyledBodyContent>{props.children}</StyledBodyContent>;
};

export default BodyContent;
