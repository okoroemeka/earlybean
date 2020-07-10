import React from 'react';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../core';
import Verification from '../../components/Reusable/Verification';

const VerifationScreen = ({navigation: {navigate}}) => {
  return (
    <Verification
      tradeIconTopPosition={
        Platform.OS === 'android' ? `${hp('1.6%')}px` : `${hp('2%')}px`
      }
      tradeIconLeftPosition={
        Platform.OS === 'android' ? `${wp('43%')}px` : `${wp('45.5%')}px`
      }
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
