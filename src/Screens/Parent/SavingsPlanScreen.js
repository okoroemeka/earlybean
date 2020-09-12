import React from 'react';

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
import PlansDropDown from '../../components/Reusable/PlansDropDown';
import reducers from '../../../utils/Reducers';
import mockData from '../../../data/mockData';
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';

const StyledCardWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
  padding: 0 ${hp('2.5%')}px;
  margin-top: ${props => props.marginTop || hp('4%')}px;
  position: relative;
`;

const {initialPlansState, transferMethod} = mockData;
const {SavingsDropdown} = reducers;

const SavingsPlanForm = ({navigation}) => {
  const [selectedPlan, setSeletedPlan] = React.useState('');
  const [selectedTransferMethod, setTransferMethod] = React.useState('');

  console.log('setTransferMethod', selectedTransferMethod, selectedPlan);
  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="Transfer to savings plan">
      <StyledCardWrapper>
        <PlansDropDown
          plansData={initialPlansState}
          planReducer={SavingsDropdown}
          getSelctedPlan={setSeletedPlan}
        />

        <View height="auto" marginTop={hp('1%')} marginBottom={hp('3%')}>
          <TextRemade
            marginBottom={hp('1%')}
            color={colors.ashBlack}
            textAlign="left"
            fontSize={wp('3.5%')}>
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
        <View height="auto" width="auto">
          <PlansDropDown
            placeHolderText="Choose a transfer method"
            plansData={transferMethod}
            planReducer={SavingsDropdown}
            getSelctedPlan={setTransferMethod}
            dropDownRightPosition={wp('-0.08%')}
          />
        </View>
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
      </StyledCardWrapper>
    </CardWrapperWithHeader>
  );
};

export default SavingsPlanForm;
