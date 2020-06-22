import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Header from '../../components/Reusable/Header';
import Text from '../../components/Reusable/Text';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
const StyledWrapperSub = styled.View`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
`;
const StyledContentWrapper = styled.View`
  flex: 1;
  padding: ${hp('1%')}px ${Platform.OS === 'android' ? wp('6%') : wp('7.5%')}px;
`;
const StyledTextWrapper = styled.View`
  flex-direction: row;
  position: relative;
`;
const StyledText = styled.Text`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-size: ${props => props.fontSize || wp('4%')}px;
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;
const StyledTradeImage = styled.Image`
  width: ${Platform.OS === 'ios' ? '10px' : '12px'};
  height: ${Platform.OS === 'ios' ? '10px' : '12px'};
  position: absolute;
  top: ${Platform.OS === 'android' ? '1px' : '5px'};
  left: ${Platform.OS === 'android' ? '112px' : '110px'};
`;
const StyledTouchable = styled.TouchableOpacity`
  width: 100%;
  margin-top: ${hp('10%')}px;
`;
const ConfirmationScreen = () => {
  return (
    <StyledWrapper>
      <StyledWrapperSub>
        <Header />
        <StyledContentWrapper>
          <Text
            color={colors.primary}
            fontSize={wp('5%')}
            textAlign="left"
            lineHeight={hp('3%')}>
            Hi Biobele,
          </Text>
          <StyledTextWrapper>
            <Text
              color={colors.placeholderColor}
              fontSize={Platform.OS === 'ios' ? wp('3%') : wp('3.3%')}
              textAlign="left"
              lineHeight={hp('3%')}>
              ACCOUNT ACTIVE,
            </Text>
            <StyledTradeImage source={images.activeIcon} />
          </StyledTextWrapper>
          <Text
            color={colors.black}
            textAlign="left"
            marginTop={hp('3%')}
            lineHeight={Platform.OS === 'ios' ? hp('3.5%') : hp('4%')}>
            I am so glad to have you join the earlybean family. Paying attention
            to your child’s financial security is a great investment.
          </Text>
          <Text
            color={colors.black}
            textAlign="left"
            marginTop={hp('1%')}
            lineHeight={Platform.OS === 'ios' ? hp('3.5%') : hp('4%')}>
            Your trust and safety are very important to us and we have partnered
            with the most credible financial institutions and trustees to secure
            your financial data and child’s welfare on our app.
          </Text>
          <Text
            color={colors.black}
            textAlign="left"
            marginTop={hp('1%')}
            lineHeight={Platform.OS === 'ios' ? hp('3.5%') : hp('4%')}>
            Thank you! We guarantee you a seamless experience.
          </Text>
          <Text
            color={colors.black}
            textAlign="left"
            marginTop={hp('1.9%')}
            lineHeight={Platform.OS === 'ios' ? hp('3.5%') : hp('4%')}>
            The Eearlybean Team
          </Text>
          <StyledTouchable>
            <StyledText
              color={colors.primary}
              textAlign="center"
              lineHeight={Platform.OS === 'ios' ? hp('3.5%') : hp('4%')}>
              GO TO MY DASHBOARD
            </StyledText>
          </StyledTouchable>
        </StyledContentWrapper>
      </StyledWrapperSub>
    </StyledWrapper>
  );
};

export default ConfirmationScreen;
