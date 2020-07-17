import React, {useState, useReducer, useEffect} from 'react';
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
import TextInput from '../../components/UI/TextInput';

const StyledCardWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
  padding: 0 ${wp('2.5%')}px;
  margin-top: ${props => props.marginTop || hp('4%')}px;
  position: relative;
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
  height: ${hp('10%')}px;
  align-items: center;
  margin-top: ${hp('3%')}px;
`;
const StyledImageContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS == 'android' ? hp('0.4%') : hp('0.25')}px;
  padding-right: ${Platform.OS == 'ios' ? wp('2.2%') : wp('2%')}px;
  align-items: flex-end;
`;

const StyledTextWrapper = styled.View`
  width: ${props => props.width || '100%'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
`;

const StyledRoundButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  border-radius: ${props => props.borderRadius || '10px'};
  background-color: ${props => props.backgroundColor || colors.white};
  border: ${props => props.border || 'none'};
`;

const initialFrequencyState = [
  {frequency: 'Daily', active: true},
  {frequency: 'Weekly', active: false},
  {frequency: 'Monthly', active: false},
];

const initialSaveMethodState = [
  {method: 'Manual', active: true},
  {method: 'Automatically', active: false},
];

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'saveFrequency':
      return state.map(item => {
        if (item.frequency == payload) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    case 'saveMethod':
      return state.map(paymentMethod => {
        if (paymentMethod.method == payload) {
          paymentMethod.active = true;
        } else {
          paymentMethod.active = false;
        }
        return paymentMethod;
      });
    case 'resetSaveFrequency':
      return initialFrequencyState;
    case 'resetSaveMethod':
      return initialSaveMethodState;
    default:
      return state;
  }
};

const CreatePersonalPlan = ({navigation, route}) => {
  const [frequencyState, dispatchFrequencyState] = useReducer(
    reducer,
    initialFrequencyState,
  );
  const [saveMethodState, dispatchSaveMethodState] = useReducer(
    reducer,
    initialSaveMethodState,
  );
  const [activeFrequency, setActiveFrequency] = useState('');
  const [activeSaveMethod, setActiveSaveMethod] = useState('');
  const [displayPlanDropDown, setDisplayPlanDropDown] = useState(false);

  const handleSelectFrequency = data => {
    setActiveFrequency(data.payload);
    return dispatchFrequencyState(data);
  };

  const handelSaveMethod = data => {
    setActiveSaveMethod(data.payload);
    return dispatchSaveMethodState(data);
  };

  const handleFormReset = () => {
    setActiveFrequency('');
    setActiveSaveMethod('');
    dispatchFrequencyState('resetSaveFrequency');
    return setActiveSaveMethod('resetSaveMethod');
  };

  useEffect(() => {
    handleFormReset();
  }, []);

  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText={`Create a ${
        route.params.plan == 'Personal' ? 'personal' : 'family'
      } savings plan`}>
      <StyledCardWrapper>
        <TextRemade
          fontSize={wp('3%')}
          textAlign="left"
          paddingLeftAndRight={wp('0%')}
          color={colors.placeholderColor}>
          As much as you want to save for the future of your family and kids, we
          know you also have your own dreams and goals. Save towards them and
          keep a track of them here.
        </TextRemade>
        <StyledInputContianer marginTop={hp('2%')}>
          <TextInput
            id="goalName"
            keyboardType="default"
            required
            autoCapitalize="none"
            errorText="goal name can't be empty"
            initailValue=""
            placeholder="Name your goal"
            color={colors.black}
            height={Platform.OS === 'android' ? hp('6%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            borderBottomColor={colors.placeholderColor}
            border={`1px solid ${colors.placeholderColor}`}
            onInputChange={() => null}
            fontSize={wp('3%')}
          />
        </StyledInputContianer>
        <StyledInputContianer marginTop={hp('0.5%')}>
          <StyledTextWrapper width="50%">
            <TextRemade
              width="100%"
              fontSize={wp('3.3%')}
              paddingLeftAndRight={wp('3%')}
              textAlign="right"
              color={colors.black}>
              Total amount to save
            </TextRemade>
          </StyledTextWrapper>

          <TextInput
            color={colors.black}
            id="totalAmount"
            required
            minLength={1}
            autoCapitalize="none"
            errorText="enter a valid amount"
            initailValue=""
            min={1}
            keyboardType="numeric"
            paddingTopDown={hp('0.5%')}
            placeholder=""
            textControlWidth={'50%'}
            height={Platform.OS === 'android' ? hp('6%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={() => null}
            borderBottomColor={colors.placeholderColor}
            border={`1px solid ${colors.placeholderColor}`}
            fontSize={wp('3.5%')}
          />
        </StyledInputContianer>
        <StyledInputContianer marginTop={hp('0.5%')}>
          <TextRemade
            width="50%"
            fontSize={wp('3.3%')}
            paddingLeftAndRight={wp('3%')}
            textAlign="right"
            color={colors.black}>
            Amount to save today
          </TextRemade>
          <TextInput
            color={colors.black}
            id="amoutToSave"
            required
            minLength={1}
            autoCapitalize="none"
            errorText="enter a valid amount"
            initailValue=""
            min={1}
            keyboardType="numeric"
            paddingTopDown={hp('0.5%')}
            placeholder=""
            textControlWidth={'50%'}
            height={Platform.OS === 'android' ? hp('6%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={() => null}
            borderBottomColor={colors.placeholderColor}
            border={`1px solid ${colors.placeholderColor}`}
            fontSize={wp('3.5%')}
          />
        </StyledInputContianer>
        <StyledInputContianer>
          <TextRemade
            width="50%"
            fontSize={wp('3%')}
            textAlign="right"
            paddingLeftAndRight={wp('3%')}
            color={colors.black}>
            For how long
          </TextRemade>
          <StyledSelectDropdown width="50%" onTouchStart={() => null}>
            <TextRemade
              textAlign="left"
              color={colors.black}
              fontSize={wp('3%')}>
              {}
            </TextRemade>
            <StyledIconContainer
              onPress={() => setDisplayPlanDropDown(!displayPlanDropDown)}>
              <CustomIcon name="Triangle" color={colors.primary} size={8} />
            </StyledIconContainer>
          </StyledSelectDropdown>
          {displayPlanDropDown && (
            <StyledDropdownItemsContainer
              right={wp('0.1%')}
              top={Platform.OS == 'ios' ? hp('4%') : hp('5%')}
              width="50%">
              {[].map(({paymentMethod, active}, index) => (
                <StyledTouchable
                  key={index}
                  backgroundColor={active && colors.dropDownItemBackground}
                  onPress={() => null}>
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
        <StyledInputContianer marginTop={hp('%')}>
          <TextRemade
            width="50%"
            fontSize={wp('3.3%')}
            paddingLeftAndRight={wp('3%')}
            textAlign="right"
            color={colors.black}>
            Amount to save daily
          </TextRemade>
          <TextInput
            color={colors.black}
            id="amoutToSave"
            required
            minLength={1}
            autoCapitalize="none"
            errorText="enter a valid amount"
            initailValue=""
            min={1}
            keyboardType="numeric"
            paddingTopDown={hp('0.5%')}
            placeholder=""
            textControlWidth={'50%'}
            height={Platform.OS === 'android' ? hp('6%') : hp('4%')}
            placeholderTextColor={colors.placeholderColor}
            onInputChange={() => null}
            borderBottomColor={colors.placeholderColor}
            border={`1px solid ${colors.placeholderColor}`}
            fontSize={wp('3.5%')}
          />
        </StyledInputContianer>
        <StyledTextWrapper marginTop={hp('1.8%')}>
          <TextRemade
            color={colors.black}
            textAlign="left"
            fontSize={wp('3.5%')}>
            How often do you want to save?
          </TextRemade>
          <StyledInputContianer
            justifyContent="space-between"
            marginTop={hp('2%')}>
            {frequencyState.map(({frequency, active}, index) => (
              <React.Fragment key={index}>
                <StyledRoundButton
                  height="32px"
                  width="32px"
                  borderRadius="16px"
                  onPress={() =>
                    handleSelectFrequency({
                      type: 'saveFrequency',
                      payload: frequency,
                    })
                  }
                  border={`1px solid ${colors.primary}`}>
                  {active && (
                    <StyledRoundButton backgroundColor={colors.primary} />
                  )}
                </StyledRoundButton>
                <StyledTextWrapper width="auto">
                  <TextRemade
                    width="auto"
                    color={colors.black}
                    fontSize={wp('3.5%')}
                    paddingLeftAndRight={wp('2%')}>
                    {frequency}
                  </TextRemade>
                </StyledTextWrapper>
              </React.Fragment>
            ))}
          </StyledInputContianer>
        </StyledTextWrapper>
        <StyledTextWrapper marginTop={hp('1.8%')}>
          <TextRemade
            color={colors.black}
            textAlign="left"
            fontSize={wp('3.5%')}>
            How do you want to save?
          </TextRemade>
          <StyledInputContianer
            justifyContent="space-between"
            marginTop={hp('2%')}>
            {saveMethodState.map(({method, active}, index) => (
              <React.Fragment key={index}>
                <StyledRoundButton
                  height="32px"
                  width="32px"
                  borderRadius="16px"
                  onPress={() =>
                    handelSaveMethod({
                      type: 'saveMethod',
                      payload: method,
                    })
                  }
                  border={`1px solid ${colors.primary}`}>
                  {active && (
                    <StyledRoundButton backgroundColor={colors.primary} />
                  )}
                </StyledRoundButton>
                <StyledTextWrapper width="35%">
                  <TextRemade
                    width="auto"
                    color={colors.black}
                    fontSize={wp('3.5%')}
                    textAlign="left">
                    {method}
                  </TextRemade>
                </StyledTextWrapper>
              </React.Fragment>
            ))}
          </StyledInputContianer>
        </StyledTextWrapper>
        <StyledButtonContianer>
          <Button
            handlePress={() => navigation.navigate('PlanReviewScreen')}
            width={Platform.OS == 'ios' ? '34%' : '37%'}
            paddingTopBottom={
              Platform.OS == 'android' ? hp('1.6%') : hp('1.3%')
            }
            borderRadius="8px"
            flexDirection="row">
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

export default CreatePersonalPlan;
