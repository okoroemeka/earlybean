import React, {useState, useReducer} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import CustomIcon from '../../core/CustomIcon';
import CardWrapperWithHeader from '../../components/Reusable/CardWrapperWithHeader';
import Image from '../../components/UI/Image';
import Button from '../../components/UI/Button';

const StyledCardWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
  padding: 0 ${hp('0.3%')}px;
  margin-top: ${props => props.marginTop || hp('4%')}px;
  position: relative;
`;

const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  font-size: ${props => props.fontSize || wp('4.5%')}px;
  border: ${props => props.border || 'none'};
  width: ${props => props.width || '100%'};
  padding: ${props => props.paddingTopDown || hp('0.5%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || '1px'};
  border-color: ${props => props.borderBottomColor || colors.placeholderColor};
`;

const StyledSelectDropdown = styled.View`
  justify-content: center;
  width: ${props => props.width || '90%'};
  height: ${Platform.OS == 'ios' ? hp('4%') : hp('5%')}px;
  padding: ${props => props.paddingTopDown || hp('0.5%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || '1px'};
  border-color: ${props => props.borderBottomColor || colors.placeholderColor};
  margin-bottom: ${props => props.marginBottom || hp('1%')}px;
`;

const StyledDropdownItemsContainer = styled.View`
  width: ${props => props.width || '90%'};
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

const StyledInputContianer = styled.View`
  width: ${props => props.width || '100%'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-end'};
  align-items: ${props => props.alignItems || 'center'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  margin-bottom: ${props => props.marginBottom || hp('2%')}px;
`;

const StyledButtonContianer = styled.View`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: ${hp('6%')}px;
  left: ${wp('33%')}px;
`;
const StyledImageContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS == 'android' ? hp('0.4%') : hp('0.25')}px;
  padding-right: ${Platform.OS == 'ios' ? wp('2%') : wp('13%')}px;
  align-items: flex-end;
`;
const initialPlansState = [
  {plan: 'Personal savings', active: true},
  {plan: 'Family savings', active: false},
  {plan: 'Cash trust', active: false},
];

const initialPaymentMethodState = [
  {paymentMethod: 'Card', active: false},
  {paymentMethod: 'Wallet', active: false},
];

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'selectPlan':
      return state.map(item => {
        if (item.plan == payload) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    case 'paymentMethod':
      return state.map(method => {
        if (method.paymentMethod == payload) {
          method.active = true;
        } else {
          method.active = false;
        }
        return method;
      });
    default:
      return state;
  }
};

const ViewChildCashTrust = ({navigation}) => {
  const [displayPlanDropDown, setDisplayPlanDropDown] = useState(false);
  const [displayPaymentMethod, setDisplayPaymentMethod] = useState(false);
  const [plans, dispatch] = useReducer(reducer, initialPlansState);
  const [paymentMethods, dispatchPaymentMethod] = useReducer(
    reducer,
    initialPaymentMethodState,
  );
  const [activePlan, setActivePlan] = useState('select a plan');
  const [activePaymentMethod, setctivePaymentMethod] = useState('');

  const handleSelectPlan = data => {
    dispatch(data);
    setActivePlan(data.payload);
    return setDisplayPlanDropDown(!displayPlanDropDown);
  };

  const handleSelectPaymentMethod = data => {
    dispatchPaymentMethod(data);
    setctivePaymentMethod(data.payload);
    return setDisplayPaymentMethod(!displayPaymentMethod);
  };

  return (
    <CardWrapperWithHeader
      handleDisplayCashTrust={() => navigation.goBack()}
      withoutScroll
      paddingBottom={hp('5%')}
      headerText="Top up an existing plan">
      <StyledCardWrapper>
        <StyledSelectDropdown
          onTouchStart={() => setDisplayPlanDropDown(!displayPlanDropDown)}>
          <TextRemade
            textAlign="left"
            color={
              activePlan != 'select a plan'
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
            right={Platform.OS == 'ios' ? wp('0.6%') : wp('0.5%')}
            top={Platform.OS == 'ios' ? hp('4%') : hp('5%')}>
            {plans.map(({plan, active}, index) => (
              <StyledTouchable
                key={index}
                backgroundColor={active && colors.dropDownItemBackground}
                onPress={() =>
                  handleSelectPlan({type: 'selectPlan', payload: plan})
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
        <StyledInputContianer marginTop={hp('1%')}>
          <TextRemade
            width="50%"
            fontSize={wp('3%')}
            paddingLeftAndRight={wp('3%')}
            textAlign="right"
            color={colors.placeholderColor}>
            Amount to save
          </TextRemade>
          <StyledInput width="50%" keyboardType="numeric" />
        </StyledInputContianer>
        <StyledInputContianer>
          <TextRemade
            width="50%"
            fontSize={wp('3%')}
            textAlign="right"
            paddingLeftAndRight={wp('3%')}
            color={colors.placeholderColor}>
            Select a payment method
          </TextRemade>
          <StyledSelectDropdown
            width="50%"
            onTouchStart={() => setDisplayPaymentMethod(!displayPaymentMethod)}>
            <TextRemade
              textAlign="left"
              color={colors.black}
              fontSize={wp('3%')}>
              {activePaymentMethod}
            </TextRemade>
            <StyledIconContainer>
              <CustomIcon name="Triangle" color={colors.primary} size={8} />
            </StyledIconContainer>
          </StyledSelectDropdown>
          {displayPaymentMethod && (
            <StyledDropdownItemsContainer
              right={wp('0.1%')}
              top={Platform.OS == 'ios' ? hp('4%') : hp('5%')}
              width="50%">
              {paymentMethods.map(({paymentMethod, active}, index) => (
                <StyledTouchable
                  key={index}
                  backgroundColor={active && colors.dropDownItemBackground}
                  onPress={() =>
                    handleSelectPaymentMethod({
                      type: 'paymentMethod',
                      payload: paymentMethod,
                    })
                  }>
                  <TextRemade
                    textAlign="left"
                    color={colors.black}
                    fontSize={wp('3%')}>
                    {paymentMethod}
                  </TextRemade>
                  <StyledIconContainer top={hp('1%')}>
                    <Image
                      imageUrl={images.forward}
                      imageHeight={hp('0.1%')}
                      imageWidth={wp('0.5%')}
                    />
                  </StyledIconContainer>
                </StyledTouchable>
              ))}
            </StyledDropdownItemsContainer>
          )}
        </StyledInputContianer>
        <StyledButtonContianer>
          <Button
            width={Platform.OS == 'ios' ? '30%' : '33%'}
            borderRadius="8px"
            flexDirection="row"
            paddingTopBottom={Platform.OS == 'android' ? hp('2%') : hp('1.5%')}>
            <TextRemade textAlign="left" fontSize={wp('3%')} width="auto">
              Save
            </TextRemade>
            <StyledImageContainer>
              <Image
                imageUrl={images.nextIcon}
                imageWidth={Platform.OS == 'ios' ? wp('1.3%') : wp('1.7%')}
                imageHeight={Platform.OS == 'ios' ? hp('0.14%') : hp('0.3%')}
              />
            </StyledImageContainer>
          </Button>
        </StyledButtonContianer>
      </StyledCardWrapper>
    </CardWrapperWithHeader>
  );
};

export default ViewChildCashTrust;
