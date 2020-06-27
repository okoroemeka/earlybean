import React from 'react';
import {Platform} from 'react-native';
import {colors} from '../../core';
import Verification from '../../components/Reusable/Verification';

const VerifationScreen = ({navigation: {navigate}}) => {
  return (
    <Verification
      tradeIconTopPosition={Platform.OS === 'android' ? '12px' : '19px'}
      tradeIconLeftPosition={Platform.OS === 'android' ? '185px' : '195px'}
      greetingTextColor={colors.primary}
      welcomeText="Hi Biobele"
      buttonTextColor={colors.white}
      instruction="Enter the token sent to your phone number"
      buttonColor={colors.primary}
      handleVerification={() => navigate('ConfirmationScreen')}
      headerTextColor={colors.primary}
    />
  );
};

export default VerifationScreen;
