import React, {useState, useCallback} from 'react';

import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, images} from '../../core';
import CardHeader from '../Reusable/CardHeader';
import View from './View';
import Text from './TextRemade';
import Button from './Button';
import ImageRemade from './ImageRemade';
import CustomIcon from '../../core/CustomIcon';
import mockData from '../../../data/mockData';
import ChooseFrequency from '../UI/ChooseFrequency';

const StyledCardWrapper = styled.View`
  width: 80%;
  margin-top: ${Platform.OS == 'ios' ? hp('12%') : hp('9%')}px;
  background-color: ${colors.white};
`;

const StyledCardBody = styled.View`
  width: 100%;
  align-items: center;
  padding-top: ${wp('3%')}px;
`;
const StyledDisplayArea = styled.View`
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-right: ${wp('2%')}px;
  border: 0.5px solid ${colors.buttonColor};
  background-color: ${colors.ashBlack};
`;
const StyledTextContainer = styled.TouchableOpacity`
  width: 33.33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-width: 0.3px;
  border-right-color: ${props => props.borderRightColor || colors.primary};
  border-left-color: ${props => props.borderLeftColor || colors.primary};
  border-bottom-color: ${props => props.borderBottomtColor || colors.primary};
  border-top-color: ${props => props.borderTopColor || colors.primary};
`;

const AddAllowance = ({handleToggleModal, getSelectedAllowance}) => {
  const [frequency, setFrequency] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');

  /**
   *Handle selected frequency mode
   * @param {string} data
   */
  const handleSelectedFrequency = data => {
    setFrequency(data);
  };

  /**
   * Handle selected number
   * @param {string} number
   */
  const handleSelectedNumber = number => {
    setSelectedNumber(selectedNumber + number);
  };

  /**
   * Handle delete a number
   */
  const handleDeleteNumber = () => {
    const newSelectedNumber = selectedNumber.slice(
      0,
      selectedNumber.length - 1,
    );
    setSelectedNumber(newSelectedNumber);
  };

  /**
   * Handle long press of clear numbers
   */
  const handleLongPressOfClearNumber = () => {
    setSelectedNumber('');
  };

  /**
   * Save selected allowance
   */
  const handleSave = () => {
    getSelectedAllowance(selectedNumber);
    handleToggleModal();
  };
  return (
    <StyledCardWrapper>
      <CardHeader
        backgroundColor={colors.white}
        backTextColor={colors.primary}
        backIconColor={colors.primary}
        cardTitleColor={colors.primary}
        logoColor={colors.primary}
        handleGoback={handleToggleModal}
        cardTitle="Set Allowance"
      />
      <StyledCardBody>
        <ChooseFrequency getSelectedFrequency={handleSelectedFrequency} />
        <View height={`${Platform.OS == 'ios' ? hp('6%') : hp('8%')}px`}>
          <StyledDisplayArea>
            <Text textAlign="right" fontSize={wp('8%')} fontWeight="bold">
              {selectedNumber}
            </Text>
          </StyledDisplayArea>
        </View>
        <View
          height={`${Platform.OS == 'ios' ? hp('35%') : hp('45%')}px`}
          backgroundColor={colors.primary}>
          <View height="25%" flexDirection="row">
            <StyledTextContainer
              onPress={() => handleSelectedNumber(1)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                1
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(2)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                2
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(3)}
              borderBottomtColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                3
              </Text>
            </StyledTextContainer>
          </View>
          <View height="25%" flexDirection="row">
            <StyledTextContainer
              onPress={() => handleSelectedNumber(4)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                4
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(5)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                5
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(6)}
              borderBottomtColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                6
              </Text>
            </StyledTextContainer>
          </View>
          <View height="25%" flexDirection="row">
            <StyledTextContainer
              onPress={() => handleSelectedNumber(7)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                7
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(8)}
              borderBottomtColor={colors.buttonColor}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                8
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(9)}
              borderBottomtColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                9
              </Text>
            </StyledTextContainer>
          </View>
          <View height="25%" flexDirection="row">
            <StyledTextContainer
              onLongPress={handleLongPressOfClearNumber}
              onPress={handleDeleteNumber}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('5%')}>
                Clr
              </Text>
            </StyledTextContainer>
            <StyledTextContainer
              onPress={() => handleSelectedNumber(0)}
              borderRightColor={colors.buttonColor}>
              <Text width="auto" fontSize={wp('8%')}>
                0
              </Text>
            </StyledTextContainer>
            <StyledTextContainer onPress={handleSave}>
              <Text width="auto" fontSize={wp('5%')}>
                Save
              </Text>
            </StyledTextContainer>
          </View>
        </View>
      </StyledCardBody>
    </StyledCardWrapper>
  );
};

export default AddAllowance;
