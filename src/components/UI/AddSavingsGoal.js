import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, images} from '../../core';
import CardHeader from '../Reusable/CardHeader';
import View from './View';
import TextInput from './TextInput';
import Text from './TextRemade';
import Button from './Button';
import ChooseFrequency from './ChooseFrequency';
import ImageRemade from './ImageRemade';

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
const data = [
  {
    id: 1,
    name: 'Daily',
    active: true,
  },
  {
    id: 2,
    name: 'Weekly',
    active: false,
  },
  {
    id: 3,
    name: 'Monthly',
    active: false,
  },
];
const AddChildSavingsCard = ({handleToggleModal}) => {
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [goal, setGoal] = useState('');

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
            errorText="goal name can't be empty"
            initailValue=""
            paddingTopDown={hp('0.5%')}
            placeholder="Name your goal"
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
            fontSize={wp('2.8%')}
            width="30%"
            textAlign="left">
            Amount to save
          </Text>
          <View height="auto" width="65%">
            <TextInput
              id="userName"
              keyboardType="numeric"
              required
              autoCapitalize="none"
              errorText="invalid amount"
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
            fontSize={wp('2.8%')}
            width="30%"
            textAlign="left">
            By when
          </Text>
          <View height="auto" width="65%">
            <TextInput
              id="password"
              keyboardType="default"
              required
              minLength={6}
              autoCapitalize="none"
              errorText="invalid date"
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
        <View width="100%" height="auto" alignItems="flex-start">
          <ChooseFrequency
            backgroundColor={colors.white}
            buttonWrapperColor={colors.white}
            buttonWrapperBorderColor={colors.primary}
            buttonColor={colors.primary}
            operationData={data}
            textColor={colors.primary}
            getSelectedFrequency={setSelectedFrequency}
          />
        </View>
        <View
          height="auto"
          width="85%"
          flexDirection="row"
          alignItems="center"
          marginTop={hp('1.5%')}>
          <Text
            color={colors.placeholderColor}
            fontSize={wp('2.8%')}
            width="30%"
            textAlign="left">
            Automatically save
          </Text>
          <View height="auto" width="65%">
            <TextInput
              id="password"
              keyboardType="default"
              required
              minLength={6}
              autoCapitalize="none"
              errorText="this field can't be empty"
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
          <Button
            width="40%"
            paddingLeftRight={wp('3%')}
            flexDirection="row"
            alignItems="center"
            borderRadius="10px"
            height={`${Platform.OS == 'ios' ? hp('4%') : hp('5%')}px`}
            backgroundColor={colors.primary}>
            <Text fontSize={wp('3.2%')} width="auto" textAlign="left">
              Save goal
            </Text>
            <ImageRemade
              imageUrl={images.nextIcon}
              imageWidth={`${
                Platform.OS == 'android' ? wp('6.1%') : wp('5.7%')
              }px`}
              imageHeight={`${
                Platform.OS == 'android' ? hp('1.9%') : hp('1.5%')
              }px`}
              marginLeft="auto"
            />
          </Button>
        </View>
      </StyledCardBody>
    </StyledCardWrapper>
  );
};

export default AddChildSavingsCard;
