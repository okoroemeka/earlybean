import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Header from './Header';
import Text from './Text';
import Image from './Image';
import Button from './Button';

const StyledSubWrapper = styled.View`
  flex: 1;
  background-color: ${colors.white};
  position: relative;
`;
const StyledContianer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  background: transparent;
`;
const StyledSubContainer = styled.View`
  flex: 1;
  padding: ${hp('1%')}px ${wp('4%')}px;
`;
const StyledView = styled.View`
  width: 20%;
  margin-top: ${hp('3%')}px;
`;
const StyledDotWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const StyledDotcontainer = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${hp('4%')}px ${wp('0%')}px;
  justify-content: center;
`;
const StyledDot = styled.View`
  width: 10px;
  height: 10px;
  margin: 0px 5px;
  border-radius: 5px;
  background-color: ${props => props.color || 'gray'};
`;
const WelcomeScreen = ({
  backgroundImage,
  welcomeTextOne,
  welcomeTexttwo,
  welcomeTextThree = '',
  screenNumber,
  onPressHandler,
}) => {
  return (
    <StyledSubWrapper>
      <Image imageUrl={backgroundImage} imageWidth={100} imageHeight={100} />
      <StyledContianer>
        <StyledSubContainer>
          <Header
            headerHeight="10%"
            justifyContent="flex-end"
            logoUrl={images.childBean}
            tradeMarkUrl={images.childTrade}
            textColor={colors.childPrimaryColor}
            leftPositon={Platform.OS === 'ios' ? '360px' : '358px'}
            topPosition={Platform.OS === 'ios' ? '29px' : '20px'}
            logoWidth={2}
            logoHeight={Platform.OS === 'ios' ? 3.1 : 4}
          />
          <Text
            color={colors.childPrimaryColor}
            textAlign="left"
            fontSize={wp('7%')}>
            {welcomeTextOne}
          </Text>
          <Text
            color={colors.childPrimaryColor}
            textAlign="left"
            fontSize={wp('7%')}>
            {welcomeTexttwo}
          </Text>
          <Text
            color={colors.black}
            textAlign="left"
            fontSize={wp('4%')}
            marginTop={hp('3%')}
            lineHeight={Platform.OS === 'ios' ? hp('2.5%') : hp('3.5%')}>
            {welcomeTextThree}
          </Text>
          <StyledView>
            <Button
              paddingTopBottom={
                Platform.OS === 'android' ? hp('1.5%') : hp('1%')
              }
              backgroundColor={colors.childPrimaryColor}
              borderRadius="5px"
              handlePress={onPressHandler}>
              <Image
                imageUrl={images.nextIcon}
                imageWidth={Platform.OS === 'android' ? 6 : 8}
                imageHeight={Platform.OS === 'android' ? 2 : 1.5}
              />
            </Button>
          </StyledView>
          <StyledDotWrapper>
            <StyledDotcontainer>
              <StyledDot
                color={screenNumber === 1 ? colors.childPrimaryColor : 'gray'}
              />
              <StyledDot
                color={screenNumber === 2 ? colors.childPrimaryColor : 'gray'}
              />
            </StyledDotcontainer>
          </StyledDotWrapper>
        </StyledSubContainer>
      </StyledContianer>
    </StyledSubWrapper>
  );
};

export default WelcomeScreen;
