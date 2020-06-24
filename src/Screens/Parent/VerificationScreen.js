import React from 'react';
import {Platform} from 'react-native';
import {colors} from '../../core';
import Verification from '../../components/Reusable/Verification';

const VerifationScreen = ({navigation: {navigate}}) => {
  return (
    <Verification
      tradeIconTopPosition={Platform.OS === 'android' ? '20px' : '20px'}
      tradeIconLeftPosition={Platform.OS === 'android' ? '175px' : '182px'}
      greetingTextColor={colors.primary}
      welcomeText="Hi Biobele"
      buttonTextColor={colors.white}
      instruction="Enter the token sent to your phone number"
      buttonColor={colors.primary}
      handleVerification={() => navigate('ConfirmationScreen')}
    />
  );
};

export default VerifationScreen;
