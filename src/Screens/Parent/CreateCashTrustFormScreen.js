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
import TextInput from '../../components/UI/TextInput';
import ImageRemade from '../../components/UI/ImageRemade';
import ViewHelper from '../../components/UI/View';
import mockData from '../../../data/mockData';
import Reducers from '../../../utils/Reducers';

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

const StyledImageCardWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('2%')}px;
`;

const StyledImageWrapper = styled.View`
  width: ${props => (props.active ? '65px' : '60px')};
  height: ${props => (props.active ? '65px' : '60px')};
  justify-content: center;
  align-items: center;
  border-radius: ${props => (props.active ? '35px' : '30px')};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  position: relative;
`;

const StyledImageSubWrapper = styled.TouchableOpacity`
  width: ${props => (props.active ? '55px' : '50px')};
  height: ${props => (props.active ? '55px' : '50px')};
  border-radius: ${props => (props.active ? '27px' : '25px')};
  overflow: hidden;
`;

const {
  initialFrequencyState,
  initialSaveMethodState,
  initialChildrenState,
} = mockData;
const {createTrust} = Reducers;

const CreatePersonalPlan = ({navigation}) => {
  const [frequencyState, dispatchFrequencyState] = useReducer(
    createTrust({
      initialFrequencyState,
      initialSaveMethodState,
    }),
    initialFrequencyState,
  );
  const [saveMethodState, dispatchSaveMethodState] = useReducer(
    createTrust({
      initialFrequencyState,
      initialSaveMethodState,
    }),
    initialSaveMethodState,
  );
  const [childrenState, dispatchChildren] = useReducer(
    createTrust(),
    initialChildrenState,
  );
  const [chosenChild, setChosenChild] = useState('');
  const [activeFrequency, setActiveFrequency] = useState('');
  const [activeSaveMethod, setActiveSaveMethod] = useState('');
  const [displayPlanDropDown, setDisplayPlanDropDown] = useState(false);

  const handleSelectFrequency = data => {
    setActiveFrequency(data.payload);
    return dispatchFrequencyState(data);
  };

  const handleSaveMethod = data => {
    setActiveSaveMethod(data.payload);
    return dispatchSaveMethodState(data);
  };

  const handleSelectChild = data => {
    setChosenChild(data.payload.childName);
    return dispatchChildren(data);
  };

  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="Create a trust fund">
      <StyledCardWrapper>
        <TextRemade
          fontSize={wp('3.5%')}
          textAlign="left"
          paddingLeftAndRight={wp('0%')}
          color={colors.placeholderColor}>
          Here, you can set long-term savings plans for your kids, we guarantee
          and grow the funds and pay out on your agreed terms.
        </TextRemade>
        <StyledImageCardWrapper>
          {childrenState.map(({imageUrl, childName, active, id}, index) => (
            <ViewHelper width="auto" height="auto" key={index}>
              <StyledImageWrapper active={active}>
                <StyledImageSubWrapper
                  active={active}
                  onPress={() =>
                    handleSelectChild({
                      type: 'selectChild',
                      payload: {id: id, childName},
                    })
                  }>
                  <ImageRemade imageUrl={imageUrl} resizeMode="cover" />
                </StyledImageSubWrapper>
                {active && (
                  <ViewHelper
                    width={'22px'}
                    height={'22px'}
                    position="absolute"
                    top={0}
                    right={0}
                    padding={5}
                    backgroundColor={colors.primary}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={10}>
                    <ImageRemade
                      imageUrl={images.tick}
                      imageWidth={'13px'}
                      imageHeight={'13px'}
                    />
                  </ViewHelper>
                )}
              </StyledImageWrapper>
              <TextRemade
                width="auto"
                fontSize={wp('3.5%')}
                marginTop={hp('0.3%')}
                textAlign="center"
                paddingLeftAndRight={wp('0%')}
                color={colors.placeholderColor}>
                {childName}
              </TextRemade>
            </ViewHelper>
          ))}
        </StyledImageCardWrapper>
        <StyledInputContianer marginTop={hp('2.5%')}>
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
            Till when
          </TextRemade>
          <StyledSelectDropdown width="50%" onTouchStart={() => null}>
            <TextRemade
              textAlign="left"
              color={colors.black}
              fontSize={wp('3%')}>
              Select duration
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
            Amount to save monthly
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
                    handleSaveMethod({
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
