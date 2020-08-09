import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../core';
import CardHeader from '../Reusable/CardHeader';
import View from './View';
import TextInput from './TextInput';
import Text from './TextRemade';
import Button from './Button';

const StyledCardWrapper = styled.View`
  width: 80%;
  margin-top: ${hp('15%')}px;
  background-color: ${colors.white};
`;

const StyledCardBody = styled.View`
  width: 100%;
  align-items: center;
  padding-top: ${wp('3%')}px;
`;

const AddChildCard = ({handleToggleModal}) => {
  const inputChangeHandler = () => {
    return null;
  };
  return (
    <StyledCardWrapper>
      <CardHeader cardTitle="Add a child" handleGoback={handleToggleModal} />
      <StyledCardBody height="auto">
        <View height="auto" width="85%">
          <TextInput
            id="childName"
            keyboardType="default"
            required
            autoCapitalize="none"
            errorText="enter a valid name"
            initailValue=""
            paddingTopDown={hp('0.5%')}
            placeholder="Childs full name"
            textControlWidth={'100%'}
            height={Platform.OS === 'android' ? hp('7%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={inputChangeHandler}
            border={`1px solid ${colors.placeholderColor}`}
            fontSize={wp('3%')}
            borderBottomColor={colors.placeholderColor}
          />
        </View>
        <View
          height="auto"
          width="85%"
          flexDirection="row"
          alignItems="center"
          marginTop={hp('2%')}>
          <Text
            color={colors.placeholderColor}
            fontSize={wp('3.6%')}
            width="30%"
            textAlign="left">
            username
          </Text>
          <View height="auto" width="65%">
            <TextInput
              id="userName"
              keyboardType="default"
              required
              autoCapitalize="none"
              errorText="enter a valid username"
              initailValue=""
              paddingTopDown={hp('0.5%')}
              textControlWidth={'100%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('4%')}
              onInputChange={inputChangeHandler}
              border={`1px solid ${colors.placeholderColor}`}
              fontSize={wp('3%')}
              borderBottomColor={colors.placeholderColor}
            />
          </View>
        </View>
        <View
          height="auto"
          width="85%"
          flexDirection="row"
          alignItems="center"
          marginTop={hp('1.5%')}>
          <Text
            color={colors.placeholderColor}
            fontSize={wp('3.6%')}
            width="30%"
            textAlign="left">
            password
          </Text>
          <View height="auto" width="65%">
            <TextInput
              id="password"
              keyboardType="default"
              required
              minLength={6}
              autoCapitalize="none"
              errorText="password length must be 6 or more"
              initailValue=""
              secureTextEntry
              paddingTopDown={hp('0.5%')}
              textControlWidth={'100%'}
              height={Platform.OS === 'android' ? hp('7%') : hp('4%')}
              onInputChange={inputChangeHandler}
              border={`1px solid ${colors.placeholderColor}`}
              fontSize={wp('3%')}
              borderBottomColor={colors.placeholderColor}
            />
          </View>
        </View>
        <View
          height="auto"
          alignItems="center"
          marginTop={hp('5%')}
          marginBottom={hp('3%')}>
          <Button width="40%" borderRadius="8px">
            <Text fontSize={wp('3.2%')}>Add child</Text>
          </Button>
        </View>
      </StyledCardBody>
    </StyledCardWrapper>
  );
};

export default AddChildCard;
