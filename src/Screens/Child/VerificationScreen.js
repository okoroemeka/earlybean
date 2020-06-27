import React from 'react';
import {Platform} from 'react-native';
import {colors, images} from '../../core';
import Verification from '../../components/Reusable/Verification';

const VerifationScreen = ({navigation: {navigate}}) => {
  return (
    <Verification
      logoImage={images.childBean}
      tradeMarkImage={images.childTrade}
      tradeIconTopPosition={Platform.OS === 'ios' ? '18px' : '10px'}
      tradeIconLeftPosition="360px"
      justifyHeaderContent="flex-end"
      greetingTextColor={colors.black}
      headerTextColor={colors.childPrimaryColor}
      welcomeText="Hello"
      instruction="Enter the token ID sent to your parent mobile number"
      buttonTextColor={colors.white}
      buttonColor={colors.childPrimaryColor}
      handleVerification={() => navigate('ConfirmationScreen')}
      inputBorderBottomColor={colors.childPrimaryColor}
    />
  );
};

export default VerifationScreen;
