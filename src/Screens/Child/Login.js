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
import Button from '../../components/Reusable/Button';

const StyledWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: ${hp('2%')}px ${wp('4%')}px;
  background-color: ${colors.childPrimaryColor};
`;
const StyledSubWrapper = styled.SafeAreaView`
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
      <StyledSubWrapper>
        <Header
          headerHeight="10%"
          justifyContent="flex-end"
          logoUrl={images.whiteLogo}
          tradeMarkUrl={images.whiteTradeMark}
          textColor={colors.white}
          leftPositon="360px"
          topPosition={Platform.OS === 'ios' ? '22px' : '13px'}
          logoWidth={2}
          logoHeight={Platform.OS === 'ios' ? 3.1 : 4}
        />
        <StyledFormWrapper>
          <Text textAlign="left" fontSize={wp('6%')}>
            Welcome Jay!
          </Text>
          <Text
            textAlign="left"
            fontSize={wp('3.5%')}
            color={colors.white}
            marginTop={hp('0.3%')}>
            We are glad to have you back
          </Text>
          <StyledView marginTop={hp('8%')}>
            <StyledInput
              color={colors.white}
              paddingTopDown={hp('0.5%')}
              placeholder="Username"
              width={'100%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
              placeholderTextColor={colors.white}
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
              placeholderTextColor={colors.white}
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
              borderRadius="10px"
              handlePress={() => navigate('VerificationScreen')}>
              <Text textAlign="center" color={colors.childPrimaryColor}>
                LOG IN
              </Text>
            </Button>
          </StyledView>
          <StyledView marginTop={hp('2%')}>
            <Text
              color={colors.placeholderColor}
              marginTop={hp('0%')}
              fontSize={wp('3.3%')}>
              Didn't get a token?
            </Text>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('0%') : hp('0%')}>
              <Text
                lineHeight={hp('2%')}
                color={colors.white}
                textAlign="left"
                fontSize={wp('3.3%')}>
                CLICK HERE
              </Text>
              <StyledLine width="100%" />
            </StyledTouchable>
          </StyledView>
        </StyledFormWrapper>
      </StyledSubWrapper>
    </StyledWrapper>
  );
};
export default LoginScreen;
