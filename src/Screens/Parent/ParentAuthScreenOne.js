import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Text from '../../components/Reusable/Text';
import Image from '../../components/Reusable/Image';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
`;
const StyledWrapperSub = styled.View`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
`;
const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: ${hp('1%')}px ${wp('6%')}px;
  margin-bottom: ${hp('3%')}px;
  position: relative;
`;
const StyledTradeImage = styled.Image`
  width: 8px;
  height: 8px;
  position: absolute;
  top: ${Platform.OS === 'android' ? '22px' : '30px'};
  left: ${Platform.OS === 'android' ? '175px' : '180px'};
`;
const StyledBody = styled.View`
  width: 100%;
  height: 80%;
  align-items: center;
  padding: ${hp('1%')}px ${wp('6%')}px;
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
const StyledButtonWrapper = styled.View`
  width: 100%;
  height: 10%;
`;
const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  width: ${props => props.width || 'auto'};
  padding: ${hp('1%')}px ${wp('15%')}px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || colors.primary};
`;
const StyledImageNextIcon = styled.Image`
  width: ${props => wp(props.width || 100)}px;
  height: ${props => hp(props.height || 0)}px;
  margin-left: auto;
  margin-top: ${hp('1%')}px;
`;
const ParentAuthScreenOne = () => {
  return (
    <StyledWrapper>
      <StyledWrapperSub>
        <StyledHeader>
          <Image
            imageUrl={images.parentBean}
            imageWidth={Platform.OS === 'android' ? 7 : 9}
            imageHeight={4}
            marginRight={wp('3%')}
          />
          <Text color={colors.primary} fontSize={wp('5.9%')}>
            earlybean
          </Text>
          <StyledTradeImage source={images.tradeMarkParent} />
        </StyledHeader>
        <StyledBody>
          <Image
            imageUrl={images.pregMom}
            imageHeight={35}
            imageWidth={Platform.OS === 'android' ? 48 : 63}
          />
          <Text
            textAlign="left"
            fontSize={wp('5.5%')}
            color={colors.primary}
            width="100%"
            marginTop={hp('4%')}>
            Welcome to earlybean
          </Text>
          <Text
            textAlign="left"
            fontSize={wp('4%')}
            color={colors.black}
            width="100%"
            marginTop={hp('3%')}
            lineHeight={Platform.OS === 'android' ? hp('3%') : hp('2.5%')}>
            We help you plan ahead financially for your child’s future. With our
            solution, your child learns all he/she needs to know as regards
            money and you can help them secure a future for themselves.
          </Text>
          <StyledDotcontainer>
            <StyledDot color={colors.primary} />
            <StyledDot />
            <StyledDot />
          </StyledDotcontainer>
        </StyledBody>
        <StyledButtonWrapper>
          <StyledButton height={hp('1%')}>
            <Text textAlign="left">Next</Text>
            <StyledImageNextIcon
              source={images.nextIcon}
              width={wp('2%')}
              height={Platform.OS === 'android' ? hp('0.3%') : hp('0.2%')}
            />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default ParentAuthScreenOne;
