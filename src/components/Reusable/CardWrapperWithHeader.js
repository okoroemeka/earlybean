import React, {Fragment} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import BackIcon from '../../components/UI/BackIcon';
import CustomIcon from '../../core/CustomIcon';

const StyledWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 125;
`;
const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;
const StyledHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${wp('5%')}px;
  background-color: ${colors.primary};
`;
const StyledBody = styled.View`
  flex: 10;
  background-color: ${Platform.OS == 'android' ? colors.milkWhite : '#FEFEFE'};
`;
const StyledScrollView = styled.ScrollView`
  padding-bottom: ${Platform.OS == 'ios' ? hp('4%') : hp('4%')}px;
  padding-left: ${wp('5%')}px;
  padding-right: ${wp('5%')}px;
`;

const ViewChildCashTrust = ({handleDisplayCashTrust, headerText, children}) => {
  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledWrapper>
        <StyledHeader>
          <BackIcon handleBackButtonPress={handleDisplayCashTrust} />
          <TextRemade width="auto">{headerText}</TextRemade>
          <CustomIcon name="logo" color="white" size={30} />
        </StyledHeader>
        <StyledBody>
          <StyledScrollView>{children}</StyledScrollView>
        </StyledBody>
      </StyledWrapper>
    </Fragment>
  );
};

export default ViewChildCashTrust;
