import React, {useState, useReducer, useEffect, useCallback} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform, ActivityIndicator, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useMutation} from '@apollo/react-hooks';

import {colors, images} from '../../core';
import Header from '../../components/UI/Header';
import Text from '../../components/UI/Text';
import Image from '../../components/UI/Image';
import Button from '../../components/UI/Button';
import TextInput from '../../components/UI/TextInput';
import {LOGIN_MUTATION} from '../../../utils/apollo/mutations';

const StyledWrapper = styled.View`
  flex: 1;
  position: relative;
`;
const StyledStatusBar = styled.StatusBar``;
const StyledSubWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  background: transparent;
`;
const StyledContainer = styled.ScrollView`
  flex: 1;
  padding: ${hp('2%')}px ${wp('4%')}px;
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
  padding-left: ${props => props.paddingLeft || wp('0%')}px;
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

const initialState = {
  inputValues: {
    email: '',
    password: '',
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const FORM_IN_UPDATAE = 'FORM_IN_UPDATAE';
const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_IN_UPDATAE:
      const updatedInputValues = {
        ...state.inputValues,
        [action.inputName]: action.value,
      };
      const updatedInputValidity = {
        ...state.inputValidities,
        [action.inputName]: action.isValid,
      };
      let updatedformIsValid = true;
      for (let key in updatedInputValidity) {
        updatedformIsValid = updatedformIsValid && updatedInputValidity[key];
      }
      return {
        formIsValid: updatedformIsValid,
        inputValues: updatedInputValues,
        inputValidities: updatedInputValidity,
      };
    default:
      return state;
  }
};

const LoginScreen = ({navigation: {navigate}}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [login, {data}] = useMutation(LOGIN_MUTATION);

  const inputChangeHandler = useCallback(
    (inputName, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_IN_UPDATAE,
        value: inputValue,
        isValid: inputValidity,
        inputName: inputName,
      });
    },
    [dispatchFormState],
  );
  const handleSubmit = async () => {
    try {
      setError(null);
      if (!formState.formIsValid) {
        setError('invalid form input');
      } else {
        setLoading(true);
        await login({
          variables: {...formState.inputValues},
        });
        navigate('VerificationScreen');
      }
    } catch (e) {
      if (e.message.includes('GraphQL error')) {
        setError('Server error, please try again later');
      } else {
        setError(e.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [{text: 'okay'}]);
    }
  }, [error]);
  return (
    <StyledWrapper>
      <Image
        imageUrl={images.primaryAuthBackground}
        imageWidth={100}
        imageHeight={100}
      />

      <StyledSubWrapper>
        <StyledStatusBar barStyle="light-content" />
        <StyledContainer>
          <Header
            textColor={colors.white}
            logoUrl={images.whiteLogo}
            tradeMarkUrl={images.whiteTradeMark}
            headerHeight={'12%'}
            topPosition={Platform.OS === 'android' ? '22px' : '29px'}
            leftPositon={Platform.OS === 'android' ? '175px' : '186px'}
          />
          <StyledFormWrapper>
            <Text textAlign="left" fontSize={wp('6%')}>
              Welcome Back,
            </Text>
            <Text textAlign="left" fontSize={wp('6%')}>
              Bioble!
            </Text>
            <Text
              textAlign="left"
              fontSize={wp('3.5%')}
              color={colors.placeholderColor}
              marginTop={hp('3%')}>
              We are glad to have you back
            </Text>
            <StyledView>
              <TextInput
                id="email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="invalid email address"
                initailValue=""
                paddingTopDown={hp('0.5%')}
                placeholder="Email"
                textControlWidth={'100%'}
                borderBottomColor={colors.white}
                color={colors.white}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
            </StyledView>
            <StyledView>
              <TextInput
                id="password"
                keyboardType="default"
                required
                minLength={6}
                autoCapitalize="none"
                errorText="password length must be greater than 5"
                initailValue=""
                secureTextEntry={!showPassword}
                paddingTopDown={hp('0.5%')}
                placeholder="Password"
                borderBottomColor={colors.white}
                color={colors.white}
                textControlWidth={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
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
                handlePress={loading ? () => null : handleSubmit}
                width="45%"
                paddingTopBottom={Platform.OS === 'ios' ? hp('0.4%') : hp('1%')}
                backgroundColor={colors.white}
                borderRadius="10px">
                <Text textAlign="center" color={colors.primary}>
                  {!loading ? (
                    'LOG IN'
                  ) : (
                    <ActivityIndicator size="small" color={colors.primary} />
                  )}
                </Text>
              </Button>
            </StyledView>
            <StyledTouchable
              marginTop={Platform.OS === 'android' ? hp('5%') : hp('3%')}
              onPress={() => navigate('SignUpScreen')}>
              <Text
                lineHeight={hp('2%')}
                color={colors.white}
                textAlign="left"
                fontSize={wp('3.3%')}>
                CREATE ACCOUNT
              </Text>
            </StyledTouchable>
            <StyledView
              justifyContent="flex-start"
              marginTop={Platform.OS === 'android' ? hp('2%') : hp('1.2%')}
              marginBottom={Platform.OS === 'android' ? hp('1%') : hp('1.2%')}
              paddingLeft={Platform.OS === 'android' ? wp('1.5%') : wp('0.9%')}>
              <Text
                color={colors.placeholderColor}
                marginTop={hp('1%')}
                fontSize={wp('3.5%')}>
                Forgot Password?
              </Text>
              <StyledTouchable marginTop={hp('0%')} marginLeft={wp('0%')}>
                <Text
                  color={colors.white}
                  lineHeight={
                    Platform.OS === 'android' ? hp('2.5%') : hp('2.4%')
                  }
                  marginTop={hp('1%')}>
                  Click Here
                </Text>
              </StyledTouchable>
            </StyledView>
          </StyledFormWrapper>
        </StyledContainer>
      </StyledSubWrapper>
    </StyledWrapper>
  );
};

export default LoginScreen;
