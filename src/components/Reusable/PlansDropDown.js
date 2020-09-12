import React, {useState, useReducer, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '../../core';
import TextRemade from '../UI/TextRemade';
import CustomIcon from '../../core/CustomIcon';

const StyledSelectDropdown = styled.View`
  justify-content: center;
  width: ${props => props.width || '100%'};
  height: ${Platform.OS == 'ios' ? hp('4%') : hp('5%')}px;
  padding: ${props => props.paddingTopDown || hp('0.5%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || '1px'};
  border-color: ${props => props.borderBottomColor || colors.placeholderColor};
  margin-bottom: ${props => props.marginBottom || hp('1%')}px;
`;

const StyledDropdownItemsContainer = styled.View`
  width: ${props => props.width || '100%'};
  min-height: ${hp('3%')}px;
  border: ${props => props.border || '1px'};
  border-color: ${props => props.borderBottomColor || colors.placeholderColor};
  position: absolute;
  top: ${props => props.top || hp('1%')}px;
  right: ${props => props.right || wp('1%')}px;
  z-index: 10;
  background-color: ${colors.white};
`;

const StyledIconContainer = styled.TouchableOpacity`
  position: ${props => props.positon || 'absolute'};
  top: ${props => props.top || hp('1.5%')}px;
  right: ${props => props.right || wp('2%')}px;
`;

const StyledTouchable = styled.TouchableOpacity`
  padding: ${props => props.paddingTopDown || hp('0.5%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border-bottom-width: ${props => props.border || '1px'};
  border-bottom-color: ${props =>
    props.borderBottomColor || colors.placeholderColor};
  background-color: ${props => props.backgroundColor || colors.white};
  position: relative;
`;

const DropDown = ({
  placeHolderText = 'select a plan',
  plansData,
  planReducer,
  getSelctedPlan,
  dropDownRightPosition,
}) => {
  const [displayPlanDropDown, setDisplayPlanDropDown] = useState(false);
  const [activePlan, setActivePlan] = useState(placeHolderText);
  const [plans, dispatch] = useReducer(planReducer, plansData);

  const handleSelectPlan = data => {
    dispatch(data);
    setActivePlan(data.payload);
    return setDisplayPlanDropDown(!displayPlanDropDown);
  };

  useEffect(() => {
    getSelctedPlan(activePlan);
  }, [activePlan, getSelctedPlan]);

  return (
    <>
      <StyledSelectDropdown
        onTouchStart={() => setDisplayPlanDropDown(!displayPlanDropDown)}>
        <TextRemade
          textAlign="left"
          color={
            activePlan != placeHolderText
              ? colors.black
              : colors.placeholderColor
          }
          fontSize={wp('3%')}>
          {activePlan}
        </TextRemade>
        <StyledIconContainer>
          <CustomIcon name="Triangle" color={colors.primary} size={8} />
        </StyledIconContainer>
      </StyledSelectDropdown>
      {displayPlanDropDown && (
        <StyledDropdownItemsContainer
          right={
            Platform.OS == 'ios'
              ? dropDownRightPosition || wp('5.5%')
              : wp('4.2%')
          }
          top={Platform.OS == 'ios' ? hp('4%') : hp('5%')}>
          {plans.map(({plan, active}, index) => (
            <StyledTouchable
              key={index}
              backgroundColor={active && colors.dropDownItemBackground}
              onPress={() =>
                handleSelectPlan({type: 'SELECT_PLAN', payload: plan})
              }>
              <TextRemade
                textAlign="left"
                color={colors.black}
                fontSize={wp('3%')}>
                {plan}
              </TextRemade>
            </StyledTouchable>
          ))}
        </StyledDropdownItemsContainer>
      )}
    </>
  );
};

export default DropDown;
