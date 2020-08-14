import React, {useState, useReducer} from 'react';

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
import ImageRemade from './ImageRemade';
import CustomIcon from '../../core/CustomIcon';
import mockData from '../../../data/mockData';

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

const StyledTouchableDropdownIcon = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS == 'ios' ? hp('1.2%') : hp('1.8%')}px;
  right: ${wp('2%')}px;
`;
const StyledDropdownItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${wp('3%')}px;
  width: 100%;
  height: ${Platform.OS == 'android' ? hp('4%') : hp('3.2%')}px;
  background-color: ${props => props.backgroundColor || colors.white};
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5); */
`;

const StyledIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const StyledTextInput = styled.TextInput`
  color: ${colors.placeholderColor};
  width: 100%;
  height: 100%;
  padding: 0;
`;

const {compoundInteresList} = mockData;
function reducer(state, {type, payload}) {
  if (type == 'SELECT__INTEREST') {
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
const EditCompoundInterest = ({handleToggleModal}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [interestItems, dispatchSetInterestItem] = useReducer(
    reducer,
    compoundInteresList,
  );
  const [interest, setSelectedInterest] = useState('');
  const [customInterest, setCustomInterest] = useState(false);

  /**
   * toggle dropdown
   */
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  /**
   * Handles select compound interes
   * @param {object} data
   */
  const handleSelectInterestRate = data => {
    setSelectedInterest(data.payload.interest);
    dispatchSetInterestItem(data);
    setCustomInterest(false);
    return toggleDropdown();
  };

  /**
   * Handle select custom compount interest
   */
  const handleSelectCustomInterest = () => {
    setCustomInterest(true);
    toggleDropdown();
  };

  /**
   * Handles update compound interest
   * @param {string} text
   */
  const handleCompoundInterestInput = text => {
    setSelectedInterest(text);
  };
  return (
    <StyledCardWrapper>
      <CardHeader
        cardTitle="Set compound interest"
        handleGoback={handleToggleModal}
      />
      <StyledCardBody height="auto">
        <View height="auto" width="85%">
          <Text
            color={colors.placeholderColor}
            fontSize={wp('3%')}
            textAlign="left">
            Lets nudge the kids to save more. Set an interest rate your child
            recieves whenever they meet their savings.
          </Text>
          <View height="auto" marginTop={hp('1%')}>
            <View
              height={`${Platform.OS == 'android' ? hp('5.3%') : hp('3.5%')}px`}
              flexDirection="row"
              alignItems="center"
              paddingLeft={wp('2%')}
              position="relative"
              borderWidth={0.8}
              borderColor={colors.primary}>
              {customInterest ? (
                <StyledTextInput
                  id="interest"
                  keyboardType="numeric"
                  onChangeText={handleCompoundInterestInput}
                />
              ) : (
                <Text
                  width="80%"
                  color={colors.placeholderColor}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  {interest ? `${interest}%` : 'Set compound interest'}
                </Text>
              )}
              <StyledTouchableDropdownIcon onPress={toggleDropdown}>
                <CustomIcon name="Triangle" color={colors.primary} size={8} />
              </StyledTouchableDropdownIcon>
            </View>
            <View
              height={`${
                Platform.OS == 'android' ? hp('20.3%') : hp('16.3%')
              }px`}>
              {showDropdown && (
                <View borderWidth={0.8} borderColor={colors.primary}>
                  {interestItems.map((item, index) => (
                    <StyledDropdownItem
                      key={index}
                      onPress={() =>
                        handleSelectInterestRate({
                          type: 'SELECT__INTEREST',
                          payload: {
                            id: item.id,
                            interest: item.interest,
                          },
                        })
                      }
                      backgroundColor={item.active && colors.buttonColor}>
                      <Text
                        width="auto"
                        fontSize={wp('3%')}
                        color={
                          item.active ? colors.white : colors.placeholderColor
                        }>
                        {`${item.interest}%`}
                      </Text>
                      {item.active && (
                        <StyledIconWrapper>
                          <ImageRemade
                            imageUrl={images.mark}
                            imageWidth="50%"
                            imageHeight="50%"
                          />
                        </StyledIconWrapper>
                      )}
                    </StyledDropdownItem>
                  ))}

                  <StyledDropdownItem onPress={handleSelectCustomInterest}>
                    <Text
                      width="auto"
                      fontSize={wp('3.5%')}
                      color={colors.placeholderColor}>
                      Custom rate
                    </Text>
                  </StyledDropdownItem>
                </View>
              )}
            </View>
          </View>
          <View
            height="auto"
            alignItems="center"
            marginTop={hp('3%')}
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
                Save
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
        </View>
      </StyledCardBody>
    </StyledCardWrapper>
  );
};

export default EditCompoundInterest;
