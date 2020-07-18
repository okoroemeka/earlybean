import React, {Fragment} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../core';
import Header from '../UI/Header';
import Text from '../UI/Text';
import Button from '../UI/Button';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
const StyledWrapperSub = styled.ScrollView`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
`;
const StyledFormInputWrapper = styled.View`
  flex: 1;
  padding: ${hp('1%')}px ${Platform.OS === 'android' ? wp('6%') : wp('7.5%')}px;
`;
const StyledText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  line-height: ${props => props.lineHeight || hp('0%')}px;
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;
const StyledInputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'space-between'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  margin-left: ${props => props.marginLeft || hp('0%')}px;
  margin-right: ${props => props.marginRight || hp('0%')}px;
  position: relative;
`;
const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  text-align: center;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || hp('2%')}px;
  font-size: ${wp('4.5%')}px;
  border: ${props => props.border || 'none'};
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.left || 0};
`;
const StyledButtonWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? hp('3.3%') : hp('3.5')}px;
  margin-bottom: ${Platform.OS === 'ios' ? hp('3.3%') : hp('3.5')}px;
`;

const StyledTouchable = styled.TouchableOpacity`
  margin-left: ${props => props.marginLeft || wp('1.5%')}px;
`;
const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || hp('2%')}px;
  align-items: center;
  justify-content: center;
  font-size: ${wp('4.5%')}px;
  padding: ${props => props.paddingTopDown || hp('1%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || 'none'};
  border-bottom-color: ${props => props.borderBottomColor || colors.primary};
  border-bottom-width: 1px;
`;

const StyledInputText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.black};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
`;

const VerifationScreen = props => {
  const {
    logoImage,
    tradeMarkImage,
    welcomeText,
    instruction,
    headerTextColor,
    greetingTextColor,
    justifyHeaderContent,
    buttonColor,
    buttonTextColor,
    handleVerification,
    tradeIconTopPosition,
    tradeIconLeftPosition,
    inputBorderBottomColor,
    inputRef,
    inputValues,
    selectedIndex,
    handleChange,
    handleKeyPress,
    codeLength,
    loading,
    handleResendToken,
    activeResend,
    counter,
    handleNavigateToLogin,
  } = props;
  return (
    <StyledWrapper>
      <StyledWrapperSub>
        <Header
          logoUrl={logoImage}
          tradeMarkUrl={tradeMarkImage}
          textColor={headerTextColor}
          justifyContent={justifyHeaderContent}
          topPosition={tradeIconTopPosition}
          leftPositon={tradeIconLeftPosition}
        />
        <StyledFormInputWrapper>
          <StyledText
            lineHeight={hp('3%')}
            color={greetingTextColor}
            textAlign="left"
            fontSize={wp('5.5%')}>
            {welcomeText}
          </StyledText>
          <StyledText
            lineHeight={hp('4%')}
            color={colors.placeholderColor}
            textAlign="left"
            fontSize={wp('3.5%')}>
            {' '}
            Account Locked
          </StyledText>
          <StyledText
            width="80%"
            color={colors.black}
            textAlign="left"
            fontSize={wp('3.5%')}
            lineHeight={Platform.OS === 'ios' ? hp('2%') : hp('3%')}
            marginTop={hp('2%')}>
            {instruction}
          </StyledText>
          <StyledText
            color={colors.placeholderColor}
            fontSize={wp('4.5%')}
            lineHeight={Platform.OS === 'ios' ? hp('2%') : hp('3%')}
            fontStyle="italic"
            marginTop={hp('6%')}>
            Enter code here
          </StyledText>
          <StyledInputWrapper>
            {codeLength.map((_, index) => (
              <StyledView
                key={index}
                paddingTopDown={hp('0.5%')}
                width={`${wp('11%')}px`}
                borderBottomColor={inputBorderBottomColor}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}>
                <StyledInputText>{inputValues[index] || ''}</StyledInputText>
              </StyledView>
            ))}
            <StyledInput
              value=""
              onChangeText={handleChange}
              ref={inputRef}
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              onKeyPress={handleKeyPress}
              borderBottomColor={inputBorderBottomColor}
              width={`${wp('11%')}px`}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
              left={`${wp(`${selectedIndex * 13}%`)}px`}
            />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <Button
              alignItems="center"
              justifyContent="center"
              width="95%"
              height={`${hp('6%')}px`}
              borderRadius="10px"
              backgroundColor={buttonColor}
              handlePress={loading ? () => null : handleVerification}>
              {!loading ? (
                <Text textAlign="center" color={buttonTextColor} width="auto">
                  Verify my account
                </Text>
              ) : (
                <ActivityIndicator size="small" color={colors.white} />
              )}
            </Button>
          </StyledButtonWrapper>
          <StyledInputWrapper justifyContent="flex-start">
            {activeResend ? (
              <StyledText
                width="100%"
                color={colors.black}
                fontSize={wp('3.3%')}
                textAlign="left">
                Resending token in {counter}s
              </StyledText>
            ) : (
              <Fragment>
                <StyledText
                  lineHeight={Platform.OS === 'android' ? hp('2%') : hp('1.5%')}
                  color={colors.placeholderColor}
                  fontSize={wp('3.3%')}>
                  Didn’t get a token?
                </StyledText>
                <StyledTouchable
                  marginTop={
                    Platform.OS === 'android' ? hp('0.8%') : hp('0.03%')
                  }
                  onPress={handleResendToken}>
                  <Text
                    lineHeight={Platform.OS === 'ios' ? hp('1.8%') : hp('2.1%')}
                    color={buttonColor}
                    textAlign="left"
                    fontSize={wp('3.5%')}>
                    Resend Token
                  </Text>
                </StyledTouchable>
              </Fragment>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper
            justifyContent="flex-start"
            marginTop={Platform.OS === 'android' ? hp('1%') : hp('1.2%')}>
            <StyledText
              lineHeight={Platform.OS === 'android' ? hp('2%') : hp('1.5%')}
              color={colors.placeholderColor}
              fontSize={wp('3.3%')}>
              Not jay?
            </StyledText>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('1%') : hp('0.03%')}
              onPress={handleNavigateToLogin}>
              <Text
                lineHeight={Platform.OS === 'ios' ? hp('1.9%') : hp('2%')}
                color={buttonColor}
                textAlign="left"
                fontSize={wp('3.3%')}>
                LOG IN
              </Text>
            </StyledTouchable>
          </StyledInputWrapper>
        </StyledFormInputWrapper>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default VerifationScreen;
