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
  justify-content: center;
  padding: ${hp('4%')}px ${wp('0%')}px;
  position: absolute;
  bottom: 0px;
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
  justify-content: center;
  width: ${props => props.width || 'auto'};
  padding: ${hp('1%')}px ${wp('0%')}px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || colors.primary};
`;
const ParentAuthScreenThree = ({navigation: {navigate}}) => {
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
            imageUrl={images.thirdAuthImage}
            imageHeight={Platform.OS === 'android' ? 37 : 30}
            imageWidth={Platform.OS === 'android' ? 62 : 70}
          />
          <Text
            textAlign="left"
            fontSize={wp('5.5%')}
            color={colors.primary}
            width="100%"
            marginTop={hp('4%')}>
            Raise money-smart kids and independent adults.
          </Text>
          <Text
            textAlign="left"
            fontSize={wp('4%')}
            color={colors.black}
            width="100%"
            marginTop={hp('3%')}
            lineHeight={Platform.OS === 'android' ? hp('3%') : hp('2.5%')}>
            Kids gain controlled independence and great money habits as they
            learn to earn, save and spend responsibly.
          </Text>
          <StyledDotcontainer>
            <StyledDot />
            <StyledDot />
            <StyledDot color={colors.primary} />
          </StyledDotcontainer>
        </StyledBody>
        <StyledButtonWrapper>
          <StyledButton
            height={hp('1%')}
            onPress={() => navigate('SignUpScreen')}>
            <Text textAlign="left">GET STARTED</Text>
          </StyledButton>
        </StyledButtonWrapper>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default ParentAuthScreenThree;
