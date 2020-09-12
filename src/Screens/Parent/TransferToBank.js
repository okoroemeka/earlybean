import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {colors} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import CardWrapperWithHeader from '../../components/Reusable/CardWrapperWithHeader';
import View from '../../components/UI/View';
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
import RoundButton from '../../components/UI/RoundButton';
import PlansDropDown from '../../components/Reusable/PlansDropDown';
import reducers from '../../../utils/Reducers';
import mockData from '../../../data/mockData';

const StyledBody = styled.ScrollView`
  width: 100%;
  padding-top: ${hp('2.5%')}px;
  padding-left: ${wp('2.5%')}px;
  padding-bottom: ${hp('6%')}px;
  padding-right: ${hp('2.5%')}px;
`;

const {banks} = mockData;
const {SavingsDropdown} = reducers;

const TransferToBank = ({navigation}) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [saveBankDetails, setSaveBankDetails] = useState(false);

  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="Transfer to Bank">
      <StyledBody>
        <TextRemade
          color={colors.ashBlack}
          fontSize={wp('4%')}
          marginTop={hp('2%')}
          textAlign="left">
          what account do you want to transfer to?
        </TextRemade>
        <View height="auto" marginTop={hp('2%')} marginBottom={hp('1%')}>
          <TextRemade
            marginBottom={hp('1%')}
            color={colors.ashBlack}
            textAlign="left"
            fontSize={wp('3%')}>
            Account number
          </TextRemade>
          <TextInput
            id="amount"
            required
            minLength={1}
            autoCapitalize="none"
            errorText="enter a valid amount"
            initailValue=""
            border={`1px solid ${colors.placeholderColor}`}
            borderBottomColor={colors.placeholderColor}
            phone
            keyboardType="numeric"
            paddingTopDown={hp('0.5%')}
            placeholder=""
            textControlWidth={'100%'}
            height={Platform.OS === 'android' ? hp('7%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={() => null}
          />
        </View>
        <View height="auto" marginTop={hp('2%')} marginBottom={hp('1%')}>
          <TextRemade
            marginBottom={hp('1%')}
            color={colors.ashBlack}
            textAlign="left"
            fontSize={wp('3%')}>
            Amount to transfer
          </TextRemade>
          <TextInput
            id="amount"
            required
            minLength={1}
            autoCapitalize="none"
            errorText="enter a valid amount"
            initailValue=""
            border={`1px solid ${colors.placeholderColor}`}
            borderBottomColor={colors.placeholderColor}
            phone
            keyboardType="numeric"
            paddingTopDown={hp('0.5%')}
            placeholder=""
            textControlWidth={'100%'}
            height={Platform.OS === 'android' ? hp('7%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={() => null}
          />
        </View>
        <View height="auto" marginTop={hp('2%')} marginBottom={hp('1%')}>
          <TextRemade
            marginBottom={hp('1%')}
            color={colors.ashBlack}
            textAlign="left"
            fontSize={wp('3%')}>
            Bank name
          </TextRemade>
          <PlansDropDown
            placeHolderText="Select a bank"
            plansData={banks}
            planReducer={SavingsDropdown}
            getSelctedPlan={setSelectedBank}
            dropDownRightPosition={wp('-0.08%')}
            dropDownTopPosition={hp('7%')}
          />
        </View>
        <View
          height="auto"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end">
          <RoundButton
            buttonWidth="26px"
            buttonHeight="26px"
            buttonBorderRadius="13px"
            border={`1px solid ${colors.primary}`}
            alignItems="center"
            justifyContent="center"
            borderColor={colors.primary}
            backgroundColor={colors.white}
            handlePress={() => setSaveBankDetails(!saveBankDetails)}>
            <View
              width="20px"
              height="20px"
              borderRadius="10px"
              borderWidth={1}
              borderColor={colors.white}
              backgroundColor={saveBankDetails ? colors.primary : colors.white}
            />
          </RoundButton>
          <TextRemade
            color={colors.primary}
            width="auto"
            marginLeft={wp('2%')}
            fontSize={wp('3%')}>
            Save beneficiary details
          </TextRemade>
        </View>
      </StyledBody>
      <View
        height="auto"
        flexDirection="row"
        justifyContent="center"
        paddingTop={hp('5%')}
        paddingLeft={wp('4%')}
        paddingRight={wp('4%')}>
        <Button
          alignItems="center"
          borderRadius="20px"
          borderWidth="2px"
          width={`${wp('30%')}px`}
          borderColor={colors.primary}
          backgroundColor={colors.primary}
          paddingLeftRight={wp('1%')}
          paddingTopBottom={hp('0%')}>
          <TextRemade width="auto" color={colors.white} fontSize={wp('3.5%')}>
            Transfer
          </TextRemade>
        </Button>
      </View>
    </CardWrapperWithHeader>
  );
};

export default TransferToBank;
