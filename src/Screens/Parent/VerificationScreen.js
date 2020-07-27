import React, {useState, useRef, useEffect} from 'react';
import {Platform, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useMutation} from '@apollo/react-hooks';

import {colors} from '../../core';
import Verification from '../../components/Reusable/Verification';
import {
  VERIFY_CODE_MUTATION,
  RESEND_VERIFY_CODE_MUTATION,
} from '../../../utils/apollo/mutations';

const VerifationScreen = ({navigation: {navigate}, route}) => {
  const [values, setValues] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifyUser, {data}] = useMutation(VERIFY_CODE_MUTATION);
  const [resendVerificationCode, _] = useMutation(RESEND_VERIFY_CODE_MUTATION);
  const [counter, setCounter] = useState(5);
  const [activeResend, setActiveResend] = useState(false);

  const codeLength = new Array(6).fill(0);
  const inputRef = useRef();
  const selectedIndex =
    values.length < codeLength.length ? values.length : codeLength.length - 1;
  const {firstName, email} = route.params;

  const handleChange = value => {
    if (values.length <= codeLength.length)
      setValues((values + value).slice(0, codeLength.length));
    return null;
  };

  const handleKeyPress = e => {
    if (e.nativeEvent.key == 'Backspace') {
      setValues(values.slice(0, values.length - 1));
    }
    return null;
  };

  const handlesubmit = async () => {
    if (values.length < 1) {
      return setError('please enter a verification code');
    }
    try {
      setError(null);
      setLoading(true);
      await verifyUser({
        variables: {verificationCode: values},
      });
      navigate('ConfirmationScreen');
    } catch (e) {
      if (
        e.message.includes('GraphQL error') &&
        !e.message.includes('Invalid or expired verification code')
      ) {
        setError('Server error, please try again later');
      } else {
        setError(e.message.replace('GraphQL error:', ''));
      }
    }
    setLoading(false);
    setError(null);
  };

  const handleResendToken = async () => {
    try {
      setActiveResend(true);
      setError(null);
      await resendVerificationCode({
        variables: {email},
      });
    } catch (e) {
      setError(e.message.replace('GraphQL error:', ''));
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [{text: 'okay'}]);
    }
  }, [error]);

  useEffect(() => {
    let timeIntervalPointer;
    if (activeResend && counter > 0) {
      timeIntervalPointer = window.setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      setCounter(5);
      setActiveResend(false);
    }
    return () => window.clearInterval(timeIntervalPointer);
  }, [counter, activeResend]);

  return (
    <Verification
      tradeIconTopPosition={
        Platform.OS === 'android' ? `${hp('1.6%')}px` : `${hp('2%')}px`
      }
      tradeIconLeftPosition={
        Platform.OS === 'android' ? `${wp('43%')}px` : `${wp('45.5%')}px`
      }
      greetingTextColor={colors.primary}
      welcomeText={`Hi ${firstName?.replace(
        route.params.firstName[0],
        route.params.firstName[0].toUpperCase(),
      ) || ''}`}
      buttonTextColor={colors.white}
      instruction="Enter the token sent to your phone number"
      buttonColor={colors.primary}
      handleVerification={handlesubmit}
      headerTextColor={colors.primary}
      inputRef={inputRef}
      inputValues={values}
      selectedIndex={selectedIndex}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
      codeLength={codeLength}
      loading={loading}
      handleResendToken={handleResendToken}
      activeResend={activeResend}
      counter={counter}
      userName={route.params.firstName}
      handleLogin={() => navigate('LoginScreen')}
    />
  );
};

export default VerifationScreen;
