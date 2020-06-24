import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../core';
import Header from '../../components/Reusable/Header';
import Text from '../../components/Reusable/Text';
import Button from '../../components/Reusable/Button';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
const StyledWrapperSub = styled.ScrollView`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
`;
const StyledFormInputWrapper = styled.View`
  width: 100%;
  height: 70%;
  padding: ${hp('1%')}px ${Platform.OS === 'android' ? wp('6%') : wp('7.5%')}px;
`;
const StyledText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;
const StyledInputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justidyContent || 'space-between'};
  margin-top: ${props => props.marginBottom || hp('0%')}px;
  margin-left: ${props => props.marginLeft || hp('0%')}px;
`;
const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || hp('2%')}px;
  font-size: ${wp('4.5%')}px;
  padding: ${props => props.paddingTopDown || hp('1%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || 'none'};
  border-bottom-color: ${props => props.borderBottomColor || colors.primary};
  border-bottom-width: 1px;
`;
const StyledButtonWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? hp('3.3%') : hp('3.5')}px;
  margin-bottom: ${Platform.OS === 'ios' ? hp('3.3%') : hp('3.5')}px;
`;
const StyledFooterArea = styled.View`
  width: 100%;
  height: 20%;
  justify-content: flex-end;
`;
const StyledTouchable = styled.TouchableOpacity`
  margin-top: ${props => props.marginTop || hp('1%')}px;
  margin-left: ${props => props.marginLeft || wp('1.5%')}px;
`;
const StyledLine = styled.View`
  width: ${props => props.width || '36%'};
  border-bottom-width: 1px;
  border-color: ${colors.childPrimaryColor};
`;

const VerifationScreen = ({
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
}) => {
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
            lineHeight={hp('2%')}
            marginTop={hp('2%')}>
            {instruction}
          </StyledText>
          <StyledText
            color={colors.placeholderColor}
            fontSize={wp('4.5%')}
            fontStyle="italic"
            marginTop={hp('6%')}>
            Enter code here
          </StyledText>
          <StyledInputWrapper>
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              width={'15%'}
              borderBottomColor={inputBorderBottomColor}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              borderBottomColor={inputBorderBottomColor}
              width={'15%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              borderBottomColor={inputBorderBottomColor}
              width={'15%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              borderBottomColor={inputBorderBottomColor}
              width={'15%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              borderBottomColor={inputBorderBottomColor}
              width={'15%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
            <StyledInput
              keyboardType="numeric"
              paddingTopDown={hp('0.5%')}
              borderBottomColor={inputBorderBottomColor}
              width={'15%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
            />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <Button
              width="95%"
              paddingTopBottom={
                Platform.OS === 'android' ? hp('1.9%') : hp('0.8%')
              }
              borderRadius="10px"
              backgroundColor={buttonColor}
              handlePress={handleVerification}>
              <Text textAlign="center" color={buttonTextColor}>
                Verify my account
              </Text>
            </Button>
          </StyledButtonWrapper>
          <StyledInputWrapper justidyContent="center">
            <StyledText color={colors.placeholderColor} fontSize={wp('3.1%')}>
              Didn’t get a token?
            </StyledText>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('0.5%') : hp('0.09%')}>
              <Text
                lineHeight={hp('2%')}
                color={buttonColor}
                textAlign="left"
                fontSize={wp('3.3%')}>
                CLICK HERE
              </Text>
              <StyledLine width="100%" />
            </StyledTouchable>
          </StyledInputWrapper>
        </StyledFormInputWrapper>
        <StyledFooterArea>
          <StyledInputWrapper
            justidyContent="center"
            marginBottom={Platform.OS === 'android' ? hp('10%') : hp('5%')}>
            <StyledText color={colors.placeholderColor} fontSize={wp('3.1%')}>
              Not jay?
            </StyledText>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('0.5%') : hp('0.09%')}>
              <Text
                lineHeight={hp('2%')}
                color={buttonColor}
                textAlign="left"
                fontSize={wp('3.3%')}>
                LOG IN
              </Text>
              <StyledLine width="100%" />
            </StyledTouchable>
          </StyledInputWrapper>
        </StyledFooterArea>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default VerifationScreen;
