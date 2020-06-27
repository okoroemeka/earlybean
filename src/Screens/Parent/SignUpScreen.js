import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Header from '../../components/UI/Header';
import Text from '../../components/UI/Text';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
const StyledWrapperSub = styled.ScrollView`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
`;
const StyledFormWrapper = styled.View`
  width: 100%;
  height: 80%;
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
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1px;
`;

const StyledForm = styled.View`
  width: 100%;
`;

const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  margin-top: ${hp('1%')}px;
  position: relative;
`;
const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  width: ${props => props.width || 'auto'};
  padding: ${Platform.OS === 'android' ? hp('1.4%') : hp('0.65%')}px
    ${wp('5%')}px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || colors.primary};
  margin-top: ${hp('4%')}px;
`;
const StyledImageNextIcon = styled.Image`
  width: ${props => wp(props.width || 100)}px;
  height: ${props => hp(props.height || 0)}px;
  margin-left: auto;
  margin-top: ${Platform.OS === 'android' ? hp('1%') : hp('1.2%')}px;
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
  margin-left: ${wp('1%')}px;
`;
const SignUp = ({navigation: {navigate}}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledWrapper>
      <StyledWrapperSub>
        <Header
          topPosition={Platform.OS === 'android' ? '19px' : '24px'}
          leftPositon={Platform.OS === 'android' ? '185px' : '192px'}
          textColor={colors.primary}
        />
        <StyledFormWrapper>
          <Text
            width="100%"
            textAlign="left"
            color={colors.primary}
            fontSize={wp('5%')}
            lineHeight={hp('3%')}>
            Let’s Get to know you
          </Text>
          <Text
            width="70%"
            textAlign="left"
            color={colors.black}
            fontSize={wp('3.5%')}
            lineHeight={Platform.OS === 'android' ? hp('2.5%') : hp('2%')}
            marginTop={hp('0.9%')}>
            We will help you start a better way to save
          </Text>
          <StyledForm>
            <StyledView flexDirection="row">
              <StyledInput
                paddingTopDown={hp('0.5%')}
                placeholder="First name"
                width={'48%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
              <StyledInput
                paddingTopDown={hp('0.5%')}
                placeholder="Surname"
                width={'48%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
            </StyledView>
            <StyledView flexDirection="row">
              <StyledInput
                paddingTopDown={hp('0.5%')}
                placeholder="Email"
                width={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
            </StyledView>
            <StyledView flexDirection="row">
              <StyledInput
                keyboardType="numeric"
                paddingTopDown={hp('0.5%')}
                placeholder="Phone number"
                width={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
            </StyledView>
            <StyledView flexDirection="row">
              <StyledInput
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
            <StyledView flexDirection="row">
              <StyledInput
                secureTextEntry={true}
                paddingTopDown={hp('0.5%')}
                placeholder="Confirm Password"
                width={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
              />
            </StyledView>
            <StyledButton
              width="45%"
              onPress={() => navigate('VerificationScreen')}>
              <Text textAlign="left">Next</Text>
              <StyledImageNextIcon
                source={images.nextIcon}
                width={wp('1.8%')}
                height={Platform.OS === 'android' ? hp('0.3%') : hp('0.17%')}
              />
            </StyledButton>
          </StyledForm>
          <StyledView flexDirection="row" justifyContent="flex-start">
            <Text color={colors.black} fontSize={wp('3%')}>
              Have an account?
            </Text>
            <StyledTouchable onPress={() => navigate('LoginScreen')}>
              <Text color={colors.primary} fontSize={wp('3%')}>
                LOG IN
              </Text>
            </StyledTouchable>
          </StyledView>
          <StyledView flexDirection="row" justifyContent="flex-start">
            <Text color={colors.black} fontSize={wp('3%')}>
              By creating an account you agree to our
            </Text>
            <StyledTouchable>
              <Text color={colors.primary} fontSize={wp('3%')}>
                terms.
              </Text>
            </StyledTouchable>
          </StyledView>
        </StyledFormWrapper>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default SignUp;
