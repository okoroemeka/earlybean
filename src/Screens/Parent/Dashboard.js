import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform, Text} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import HomeIcon from '../../assets/Images/home.svg';

const StyledWrapper = styled.View`
  flex: 1;
  position: relative;
`;
const StyledContainer = styled.ScrollView`
  width: ${wp('100%')}px;
  height: ${hp('100%')}px;
`;
const StyledHeader = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${colors.primary};
`;
const StyledBody = styled.View`
  flex: 1;
  background-color: white;
`;

const StyledFooter = styled.View`
  width: 100%;
  height: 8%;
  background-color: ${colors.primary};
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const StyledImageContainer = styled.View`
  width: 10%;
`;
const Dashboard = () => {
  //   const {HomeIcon} = images;
  return (
    <StyledWrapper>
      <StyledHeader />
      <StyledContainer>
        <StyledBody />
      </StyledContainer>
      <StyledFooter>
        <StyledImageContainer>
          <HomeIcon width={'100'} height={'100'} />
        </StyledImageContainer>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Dashboard;
