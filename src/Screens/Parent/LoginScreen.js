import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Header from '../../components/Reusable/Header';
import Text from '../../components/Reusable/Text';
import Image from '../../components/Reusable/Image';
import Button from '../../components/Reusable/Button';

const StyledWrapper = styled.View`
  flex: 1;
  position: relative;
`;
const StyledSubWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  padding: ${hp('2%')}px ${wp('4%')}px;
  background: transparent;
`;
const StyledContainer = styled.ScrollView`
  flex: 1;
`;
const StyledFormWrapper = styled.View`
  width: 100%;
  height: 70%;
  padding: ${hp('2%')}px ${Platform.OS === 'android' ? wp('6%') : wp('7.5%')}px;
`;
const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || hp('2%')}px;
  font-size: ${wp('4.5%')}px;
  padding: ${props => props.paddingTopDown || hp('1%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || 'none'};
  border-bottom-color: ${colors.white};
  border-bottom-width: 1px;
`;
const StyledView = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  margin-top: ${props => props.marginTop || hp('1.2%')}px;
  margin-bottom: ${props => props.marginBottom || hp('0%')}px;
`;
const StyledEyeIconWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'android' ? '18px' : '16px'};
  right: 3px;
`;
const StyledEyeIcon = styled.Image`
  width: ${props => wp(props.width || 100)}px;
  height: ${props => hp(props.height || 0)}px;
`;
const StyledTouchable = styled.TouchableOpacity`
  margin-top: ${props => props.marginTop || hp('1%')}px;
  margin-left: ${props => props.marginLeft || wp('1.5%')}px;
`;
const StyledLine = styled.View`
  width: ${props => props.width || '36%'};
  border-bottom-width: 1px;
  border-color: white;
`;
const LoginScreen = ({navigation: {navigate}}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledWrapper>
      <Image
        imageUrl={images.primaryAuthBackground}
        imageWidth={100}
        imageHeight={100}
      />
      <StyledSubWrapper>
        <StyledContainer>
          <Header
            textColor={colors.white}
            logoUrl={images.whiteLogo}
            tradeMarkUrl={images.whiteTradeMark}
            headerHeight={'12%'}
            topPosition={Platform.OS === 'android' ? '22px' : '35px'}
            leftPositon={Platform.OS === 'android' ? '175px' : '183px'}
          />
          <StyledFormWrapper>
            <Text textAlign="left" fontSize={wp('6%')}>
              Welcome Back,
            </Text>
            <Text textAlign="left" fontSize={wp('6%')}>
              Bioble!
            </Text>
            <Text
              textAlign="left"
              fontSize={wp('3.5%')}
              color={colors.placeholderColor}
              marginTop={hp('3%')}>
              We are glad to have you back
            </Text>
            <StyledView>
              <StyledInput
                color={colors.white}
                paddingTopDown={hp('0.5%')}
                placeholder="Email"
                width={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
            </StyledView>
            <StyledView>
              <StyledInput
                color={colors.white}
                secureTextEntry={!showPassword}
                paddingTopDown={hp('0.5%')}
                placeholder="Password"
                width={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
              <StyledEyeIconWrapper
                onPress={() => setShowPassword(!showPassword)}>
                <StyledEyeIcon
                  source={images.eyeIcon}
                  height={Platform.OS === 'ios' ? 1.1 : 1.5}
                  width={5}
                />
              </StyledEyeIconWrapper>
            </StyledView>
            <StyledView marginTop={hp('4.5%')}>
              <Button
                width="45%"
                paddingTopBottom={Platform.OS === 'ios' ? hp('0.4%') : hp('1%')}
                backgroundColor={colors.white}
                borderRadius="10px">
                <Text textAlign="center" color={colors.primary}>
                  LOG IN
                </Text>
              </Button>
            </StyledView>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('5%') : hp('3%')}>
              <Text
                lineHeight={hp('2%')}
                color={colors.white}
                textAlign="left"
                fontSize={wp('3.3%')}>
                CREATE ACCOUNT
              </Text>
              <StyledLine />
            </StyledTouchable>
          </StyledFormWrapper>
          <StyledView
            justifyContent="center"
            marginTop={Platform.OS === 'android' ? hp('5%') : hp('10%')}
            marginBottom={Platform.OS === 'android' ? hp('5%') : hp('10%')}>
            <Text
              color={colors.placeholderColor}
              marginTop={hp('1%')}
              fontSize={wp('3.3%')}>
              Forgot Password?
            </Text>
            <StyledTouchable marginTop={hp('0%')} marginLeft={wp('0%')}>
              <Text
                color={colors.white}
                lineHeight={Platform.OS === 'android' ? hp('2.3%') : hp('2%')}
                marginTop={hp('1%')}>
                Click Here
              </Text>
              <StyledLine width="100%" />
            </StyledTouchable>
          </StyledView>
        </StyledContainer>
      </StyledSubWrapper>
    </StyledWrapper>
  );
};

export default LoginScreen;
