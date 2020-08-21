import React, {useReducer, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../core';
import View from './View';
import Text from './TextRemade';

const StyledFrequencyWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.buttonWrapperColor || colors.primary};
  border: 1px solid ${props => props.buttonWrapperBorderColor || colors.white};
`;
const StyledFrequency = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.buttonColor || colors.white};
  /* border: 1px solid ${props => props.borderColor || colors.white}; */
`;
const data = [
  {
    id: 1,
    name: 'Daily',
    active: true,
  },
  {
    id: 2,
    name: 'Monthly',
    active: false,
  },
  {
    id: 3,
    name: 'One off',
    active: false,
  },
];

function reducer(state, {type, payload}) {
  if (type == 'SELECT__FREQUENCY') {
    return state.map(item => {
      if (item.id == payload.id) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
  }
  return state;
}
const ChooseFrequency = ({
  backgroundColor,
  buttonWrapperColor,
  buttonColor,
  buttonWrapperBorderColor,
  getSelectedFrequency,
  operationData = data,
  textColor,
}) => {
  const [frequencyData, dispatch] = useReducer(reducer, operationData);
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handlePress = dataItem => {
    setSelectedFrequency(dataItem.payload.name);
    dispatch(dataItem);
  };

  useEffect(() => {
    if (getSelectedFrequency) {
      getSelectedFrequency(selectedFrequency);
    }
  }, [selectedFrequency, getSelectedFrequency]);
  return (
    <View
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      height={`${Platform.OS == 'android' ? hp('7%') : hp('6%')}px`}
      backgroundColor={backgroundColor || colors.primary}>
      {frequencyData.map((frequencyItem, index) => (
        <View height="auto" width="auto" flexDirection="row" key={index}>
          <StyledFrequencyWrapper
            onPress={() =>
              handlePress({
                type: 'SELECT__FREQUENCY',
                payload: {
                  id: frequencyItem.id,
                  name: frequencyItem.name,
                },
              })
            }
            buttonWrapperColor={buttonWrapperColor}
            buttonWrapperBorderColor={buttonWrapperBorderColor}>
            {frequencyItem.active && (
              <StyledFrequency buttonColor={buttonColor} />
            )}
          </StyledFrequencyWrapper>
          <Text
            width="auto"
            marginLeft={wp('2%')}
            fontSize={wp('3.5%')}
            color={textColor || colors.white}>
            {frequencyItem.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ChooseFrequency;
