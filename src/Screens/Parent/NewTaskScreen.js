import React, {useState, Fragment, useReducer} from 'react';
import styled from 'styled-components/native';
import {Platform, Switch} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../core';
import CardHeader from '../../components/Reusable/CardHeader';
import View from '../../components/UI/View';
import Text from '../../components/UI/TextRemade';
import Line from '../../components/UI/Line';
import HeaderStatus from '../../components/Reusable/HeaderStatus';
import ChooseFrequency from '../../components/UI/ChooseFrequency';
import ChooseChild from '../../components/UI/ChooseChild';
import mockData from '../../../data/mockData';

const StyledWrapper = styled.ScrollView`
  width: 100%;
  background-color: ${colors.white};
`;
const StyledCardWrapper = styled.SafeAreaView`
  width: 100%;
  background-color: ${colors.white};
`;
const StyledCardBody = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: ${wp('3%')}px;
`;
const StyledTouchable = styled.TouchableOpacity``;

const StyledTextInput = styled.TextInput`
  color: ${colors.placeholderColor};
  font-size: ${wp('4%')}px;
  width: 100%;
  height: ${hp('3.5%')}px;
  padding: 0;
`;

const StyledTouchableButton = styled.TouchableOpacity`
  flex-direction: row;
  width: ${wp('12%')}px;
  height: ${Platform.OS == 'ios' ? hp('3%') : hp('3.8%')}px;
  background-color: ${props => props.backgroundColor || colors.white};
  justify-content: center;
  align-items: center;
  border-color: ${props => props.borderColor || 'transparent'};
  border-radius: ${props => props.borderRadius || '0px'};
  border-width: ${props => props.borderWidth || '0px'};
  margin-right: ${wp('1%')}px;
`;

const StyledMultiLIneTextInput = styled.TextInput`
  color: ${colors.placeholderColor};
  font-size: ${wp('4%')}px;
  width: 100%;
  height: ${hp('12%')}px;
  border: 1px solid ${colors.placeholderColor};
  margin-top: ${hp('1%')}px;
`;
const data = [
  {
    id: 1,
    name: 'Weekly',
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
const {monetryReward, beanReward} = mockData;

function reducer(state = [], {type, payload}) {
  if (type == 'ACTIVEREWARD') {
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

const AddNewTask = props => {
  const [reward, dispatchRewardAction] = useReducer(reducer, monetryReward);
  const [beanReawared, dispatchBeanReward] = useReducer(reducer, beanReward);
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedChild, setSelectedChild] = useState('');
  const [enableMoney, setEnableMoney] = useState(false);
  const [enableBean, setEnableBean] = useState(false);

  const toggleMoney = () => {
    setEnableMoney(prevState => !prevState);
    setEnableBean(false);
  };

  const toggleBean = () => {
    setEnableBean(prevState => !prevState);
    setEnableMoney(false);
  };
  console.log('enableMoney', enableMoney);
  return (
    <Fragment>
      <HeaderStatus />
      <StyledWrapper>
        <StyledCardWrapper>
          <CardHeader
            cardTitle="Add a new task"
            handleGoback={() => props.navigation.goBack()}
          />
          <StyledCardBody height="auto">
            <View height="auto" width="85%">
              <Text
                color={colors.placeholderColor}
                textAlign="left"
                fontSize={Platform.OS == 'ios' ? wp('3%') : wp('3.1%')}>
                Here you can add tasks for your child to complete in exchange
                for rewards of your choice. The goal is to instill values, while
                teaching them that money is earned. Some suggestions for tasks
                can be; Read John Chapter 3, Wash mum’s car, clean up toys…
              </Text>
              <View height="auto" marginTop={hp('2%')} marginBottom={hp('2%')}>
                <StyledTextInput
                  id="interest"
                  placeholder="Name of task"
                  keyboardType="default"
                  onChangeText={() => null}
                />
                <Line borderColor={colors.primary} />
              </View>
            </View>
            <View width="100%" height="auto" alignItems="flex-start">
              <ChooseFrequency
                backgroundColor={colors.white}
                buttonWrapperColor={colors.white}
                buttonWrapperBorderColor={colors.primary}
                buttonColor={colors.primary}
                operationData={data}
                textColor={colors.primary}
                getSelectedFrequency={setSelectedFrequency}
              />
            </View>
            <View height="auto" width="85%">
              <Text
                color={colors.placeholderColor}
                textAlign="left"
                fontSize={Platform.OS == 'ios' ? wp('4%') : wp('4.3%')}>
                For
              </Text>
              <View height="auto" marginBottom={hp('2%')}>
                <ChooseChild getSelectedChild={setSelectedChild} />
              </View>
              <Text
                color={colors.placeholderColor}
                textAlign="left"
                fontSize={Platform.OS == 'ios' ? wp('4%') : wp('4.3%')}>
                I want to reward using . . .
              </Text>
              <View flexDirection="row" height="auto" marginTop={hp('0.4%')}>
                <View width="50%" height="auto" alignItems="flex-start">
                  <Text
                    color={colors.placeholderColor}
                    textAlign="left"
                    fontSize={Platform.OS == 'ios' ? wp('2.5%') : wp('3.1%')}>
                    BEANCOINS
                  </Text>
                  <Switch
                    trackColor={{false: '#979797', true: colors.primary}}
                    thumbColor={'#FFAF46'}
                    ios_backgroundColor="#979797"
                    onValueChange={toggleBean}
                    value={enableBean}
                  />
                  {enableBean && (
                    <View height="auto" marginTop={hp('1%')}>
                      <Text
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}
                        paddingLeftAndRight={wp('1%')}
                        textAlign="left">
                        How many?
                      </Text>
                      <View flexDirection="row" height="auto">
                        {beanReawared.map(item => (
                          <StyledTouchableButton
                            key={item.id}
                            onPress={() =>
                              dispatchBeanReward({
                                type: 'ACTIVEREWARD',
                                payload: {id: item.id},
                              })
                            }
                            borderRadius="12px"
                            borderWidth="1px"
                            backgroundColor={item.active && colors.primary}
                            paddingLeftRight={wp('3%')}
                            borderColor={colors.placeholderColor}>
                            <Text
                              width="auto"
                              fontSize={wp('2.2%')}
                              color={!item.active && colors.placeholderColor}>
                              {item.amount}
                            </Text>
                          </StyledTouchableButton>
                        ))}
                      </View>
                    </View>
                  )}
                  <View
                    height="auto"
                    width="auto"
                    flexDirection="row"
                    marginTop={hp('1%')}>
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={Platform.OS == 'ios' ? wp('3%') : wp('3.3%')}>
                      What are Beancoins?
                    </Text>
                    <View width="auto" height="auto">
                      <StyledTouchable>
                        <Text
                          width="auto"
                          color={colors.primary}
                          fontSize={
                            Platform.OS == 'ios' ? wp('3%') : wp('3.3%')
                          }>
                          Click Here
                        </Text>
                      </StyledTouchable>
                      <Line borderColor={colors.primary} />
                    </View>
                  </View>
                </View>
                <View
                  width="50%"
                  height="auto"
                  alignItems="flex-start"
                  paddingLeft={wp('5%')}>
                  <Text
                    width="auto"
                    color={colors.placeholderColor}
                    textAlign="left"
                    fontSize={Platform.OS == 'ios' ? wp('2.5%') : wp('3.1%')}>
                    MONEY
                  </Text>
                  <Switch
                    trackColor={{false: '#979797', true: colors.primary}}
                    thumbColor={'#B8E986'}
                    ios_backgroundColor="#979797"
                    onValueChange={toggleMoney}
                    value={enableMoney}
                  />
                  {enableMoney && (
                    <View height="auto" marginTop={hp('1%')}>
                      <Text
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}
                        paddingLeftAndRight={wp('1%')}
                        textAlign="left">
                        Amount
                      </Text>
                      <View flexDirection="row" height="auto">
                        {reward.map(item => (
                          <StyledTouchableButton
                            key={item.id}
                            onPress={() =>
                              dispatchRewardAction({
                                type: 'ACTIVEREWARD',
                                payload: {id: item.id},
                              })
                            }
                            borderRadius="12px"
                            borderWidth="1px"
                            backgroundColor={item.active && colors.primary}
                            paddingLeftRight={wp('3%')}
                            borderColor={colors.placeholderColor}>
                            <Text
                              width="auto"
                              fontSize={wp('2.2%')}
                              color={!item.active && colors.placeholderColor}>
                              N{item.amount}
                            </Text>
                          </StyledTouchableButton>
                        ))}
                        <StyledTouchableButton
                          backgroundColor={colors.white}
                          borderRadius="12px"
                          borderWidth="1px"
                          borderColor={colors.placeholderColor}>
                          <Text
                            width="auto"
                            fontSize={wp('3%')}
                            color={colors.placeholderColor}>
                            Others
                          </Text>
                        </StyledTouchableButton>
                      </View>
                    </View>
                  )}
                </View>
              </View>
              <View height="auto" marginTop={hp('1%')}>
                <StyledMultiLIneTextInput
                  multiline={true}
                  numberOfLines={8}
                  placeholder="Notes (optional)"
                />
              </View>
            </View>
          </StyledCardBody>
        </StyledCardWrapper>
      </StyledWrapper>
    </Fragment>
  );
};

export default AddNewTask;
