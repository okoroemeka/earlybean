import React, {
  useState,
  useReducer,
  useEffect,
  useCallback,
  Fragment,
} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform, Alert, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {useMutation} from '@apollo/react-hooks';

import {colors, images} from '../../core';
import Header from '../../components/UI/Header';
import Text from '../../components/UI/Text';
import TextInput from '../../components/UI/TextInput';
import {SIGNUP_MUTATION} from '../../../utils/apollo/mutations';

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
  height: ${props => props.height || 'auto'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
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

const initialState = {
  inputValues: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    phone: '',
    email: false,
    password: false,
  },
  formIsValid: false,
};

const FORM_IN_UPDATAE = 'FORM_IN_UPDATAE';
const RESET_FORM = 'RESET_FORM';
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
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

const SignUp = ({navigation: {navigate}}) => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signup, _] = useMutation(SIGNUP_MUTATION);

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

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [{text: 'okay'}]);
    }
  }, [error]);

  const handleSubmit = async () => {
    navigate('VerificationScreen');
    try {
      setError(null);
      if (!formState.formIsValid) {
        setError('invalid form input');
      } else if (
        formState.inputValues.password != formState.inputValues.confirmPassword
      ) {
        setError('Password do not match');
      } else {
        setLoading(true);
        const payload = {...formState.inputValues, accountType: 'adult'};
        delete payload.confirmPassword;
        await signup({
          variables: {...payload},
        });
        dispatchFormState(RESET_FORM);
        navigate('VerificationScreen', {
          phone: payload.phone,
        });
      }
    } catch (e) {
      if (
        e.message.includes('GraphQL error') &&
        !e.message.includes('User already exist')
      ) {
        setError('Server error, please try again later');
      } else {
        setError(e.message.replace('GraphQL error:', ''));
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
      <StyledWrapperSub>
        <Header
          topPosition={
            Platform.OS === 'android' ? `${hp('2.8%')}px` : `${hp('2.5%')}px`
          }
          leftPositon={
            Platform.OS === 'android' ? `${wp('43%')}px` : `${wp('45.5%')}px`
          }
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
              <TextInput
                id="firstName"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="enter a valid first name"
                initailValue=""
                paddingTopDown={hp('0.5%')}
                placeholder="First name"
                textControlWidth={'48%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
              <TextInput
                id="lastName"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="enter a valid surename"
                initailValue=""
                paddingTopDown={hp('0.5%')}
                placeholder="Surname"
                textControlWidth={'48%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
            </StyledView>
            <StyledView flexDirection="row">
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
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
            </StyledView>
            <StyledView flexDirection="row">
              <TextInput
                id="phone"
                required
                minLength={11}
                maxLength={11}
                autoCapitalize="none"
                errorText="enter a valid Nigerian number"
                initailValue=""
                phone
                keyboardType="numeric"
                paddingTopDown={hp('0.5%')}
                placeholder="Phone number"
                textControlWidth={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
            </StyledView>
            <StyledView flexDirection="row">
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
            <StyledView flexDirection="row">
              <TextInput
                id="confirmPassword"
                keyboardType="default"
                required
                minLength={6}
                autoCapitalize="none"
                errorText="password length must be greater than 5"
                initailValue=""
                secureTextEntry={true}
                paddingTopDown={hp('0.5%')}
                placeholder="Confirm password"
                textControlWidth={'100%'}
                height={Platform.OS === 'android' ? hp('7%') : hp('5%')}
                placeholderTextColor={colors.placeholderColor}
                onInputChange={inputChangeHandler}
              />
            </StyledView>
            <StyledButton
              width="45%"
              height={`${Platform.OS == 'ios' ? hp('5.2%') : hp('7.2%')}px`}
              justifyContent={loading && 'center'}
              onPress={loading ? () => null : handleSubmit}>
              {!loading ? (
                <Fragment>
                  <Text textAlign="left">Next</Text>
                  <StyledImageNextIcon
                    source={images.nextIcon}
                    width={wp('1.8%')}
                    height={
                      Platform.OS === 'android' ? hp('0.3%') : hp('0.17%')
                    }
                  />
                </Fragment>
              ) : (
                <ActivityIndicator size="small" color={colors.white} />
              )}
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
SignUp.navigationOptions = {
  headerTitle: 'Authenticate',
};
export default SignUp;
