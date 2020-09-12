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
import ChooseChild from '../../components/UI/ChooseChild';
import Button from '../../components/UI/Button';

const StyledBody = styled.ScrollView`
  width: 100%;
  padding-top: ${hp('2.5%')}px;
  padding-left: ${wp('2.5%')}px;
  padding-bottom: ${hp('6%')}px;
  padding-right: ${hp('2.5%')}px;
`;

const TransferToBank = ({navigation}) => {
  const [selectedChild, setSelectedChild] = useState('');

  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="Transfer to children">
      <StyledBody>
        <TextRemade
          color={colors.ashBlack}
          fontSize={wp('4%')}
          marginTop={hp('2%')}
          textAlign="left">
          Who would you like to transfer money to?
        </TextRemade>
        <View height="auto" width="98%">
          <ChooseChild getSelectedChild={setSelectedChild} />
        </View>
        <View
          height="auto"
          width="98%"
          flexDirection="row"
          marginTop={hp('3%')}>
          <View
            width="50%"
            height="auto"
            justifyContent="center"
            paddingRight={wp('2.5%')}
            paddingBottom={hp('5%')}>
            <TextRemade
              color={colors.ashBlack}
              fontSize={wp('3.5%')}
              marginTop={hp('2%')}
              textAlign="right">
              How much?
            </TextRemade>
          </View>

          <View height="auto" width="50%">
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
      </StyledBody>
    </CardWrapperWithHeader>
  );
};

export default TransferToBank;
