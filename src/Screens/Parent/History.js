import React, {Fragment, useReducer, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import HistoryHeader from '../../components/UI/HistoryHeader';
import CustomIcon from '../../core/CustomIcon';
import View from '../../components/UI/View';
import Text from '../../components/UI/TextRemade';
import mockData from '../../../data/mockData';
import Reducers from '../../../utils/Reducers';
import Button from '../../components/UI/Button';

const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;

const StyledStatusBar = styled.StatusBar``;

const StyledBodyContent = styled.View``;

const StyledMainContainer = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const StyledHeader = styled.View`
  flex: ${Platform.OS == 'ios' ? 1 : 2};
  background-color: ${colors.primary};
`;

const StyledBody = styled.View`
  flex: 3;
  background-color: ${colors.white};
`;

const StyledCard = styled.View`
  width: 100%;
  height: 100%;
  padding: ${hp('1%')}px ${wp('4%')}px;
  background-color: #fdfdfd;
  margin-top: ${hp('2%')}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.0637566);
`;

const StyledUtilView = styled.View`
  width: ${wp('9%')}px;
  height: ${hp('4.4%')}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || colors.greenBrand};
`;

const StyledTimeView = styled.TouchableOpacity`
  width: ${props => props.width || '23%'};
  height: ${props => props.height || '3%'};
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || colors.white};
`;

const StyledLine = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '0%'};
  background-color: ${props => props.color || colors.white};
`;

const StyledButtonView = styled.View`
  width: ${props => props.width};
  height: 100%;
  background-color: ${props => props.backGroundColor || 'transparent'};
  border-radius: ${wp('1.5%')}px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.5);
`;

const StyledButtonWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: ${Platform.OS == 'android' ? hp('5%') : hp('4%')}px;
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('1%')}px;
  background-color: rgba(99, 47, 127, 0.3783);
  border-radius: ${wp('1.5%')}px;
`;

const {transactionHistoryMock, transactionTime} = mockData;
const {KidsReducer} = Reducers;

const History = props => {
  const [selectPeriod, setSelectPeriod] = useState('');
  const [activeButton, setActiveButton] = React.useState('payouts');

  const [period, dispatchSetPeriod] = useReducer(
    KidsReducer({
      transactionTime,
    }),
    transactionTime,
  );

  /**
   *
   * @param {object} data
   * @returns {function} dispatchSetPeriod
   *
   */
  const handleSelectPeriod = data => {
    setSelectPeriod(data.payload.period);
    return dispatchSetPeriod(data);
  };

  /**
   * render buttons
   */
  const renderButtons = () => (
    <StyledButtonWrapper>
      <StyledButtonView
        width="24%"
        backGroundColor={activeButton == 'savings' && colors.primary}>
        <Button
          backgroundColor="transparent"
          paddingLeftRight={wp('3%')}
          width="100%"
          handlePress={() => setActiveButton('savings')}>
          <Text fontSize={wp('3%')}>Savings</Text>
        </Button>
      </StyledButtonView>
      <StyledLine width="1px" height="70%" />
      <StyledButtonView
        width="24%"
        backGroundColor={activeButton == 'returns' && colors.primary}>
        <Button
          backgroundColor="transparent"
          paddingLeftRight={wp('3%')}
          handlePress={() => setActiveButton('returns')}
          width="100%">
          <Text fontSize={wp('3%')}>Returns</Text>
        </Button>
      </StyledButtonView>
      <StyledLine width="1px" height="70%" />
      <StyledButtonView
        width="25%"
        backGroundColor={activeButton == 'withdrawals' && colors.primary}>
        <Button
          backgroundColor="transparent"
          paddingLeftRight={wp('3%')}
          handlePress={() => setActiveButton('withdrawals')}
          width="100%">
          <Text fontSize={wp('3%')}>Withdrawals</Text>
        </Button>
      </StyledButtonView>
      <StyledLine width="1px" height="70%" />
      <StyledButtonView
        width="25%"
        backGroundColor={activeButton == 'payouts' && colors.primary}>
        <Button
          backgroundColor="transparent"
          paddingLeftRight={wp('3%')}
          handlePress={() => setActiveButton('payouts')}
          width="100%">
          <Text fontSize={wp('3%')}>pay-outs</Text>
        </Button>
      </StyledButtonView>
    </StyledButtonWrapper>
  );

  /**
   * @returns {} Jsx element
   * @param {object} transaction
   * @param {integer} index
   */
  const ListItem = ({item}) => (
    <View
      marginTop={hp('1.6%')}
      marginBottom={hp('1%')}
      height="auto"
      flexDirection="row"
      justifyContent="space-between">
      <View height="auto" width="60%">
        <Text
          color={colors.primary}
          fontSize={wp('3%')}
          textTransform="capitalize"
          textAlign="left">
          {item.title}
        </Text>
        <Text
          color={colors.placeholderColor}
          fontSize={wp('2.5%')}
          textTransform="capitalize"
          textAlign="left">
          {item.time}
        </Text>
      </View>
      <View height="auto" width="20%">
        <StyledUtilView
          backgroundColor={
            item.type == 'expenses' ? colors.lightGreen : colors.lightRed
          }>
          <CustomIcon
            name={item.type == 'expenses' ? 'up-arrow' : 'down-arrow'}
            color={item.type == 'expenses' ? colors.greenBrand : colors.wineRed}
            size={18}
          />
        </StyledUtilView>
      </View>
      <View height="auto" width="20%">
        <Text width="auto" color={colors.placeholderColor} fontSize={12}>
          {' '}
          N{'2,000'}
        </Text>
        <Text width="auto" color={colors.placeholderColor} fontSize={10}>
          {' '}
          N{'6,700'}
        </Text>
      </View>
    </View>
  );

  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledMainContainer>
        <StyledStatusBar barStyle="light-content" />
        <StyledHeader>
          <HistoryHeader
            userFirstName="Biobele"
            accountId={1209988666}
            heading="Financial overview"
            subHeading="Kids balance"
            amount="25,000,000"
          />
        </StyledHeader>
        <StyledBody>
          <StyledBodyContent>
            <View paddingRight={wp('2%')} paddingLeft={wp('2%')} height="auto">
              {renderButtons()}
            </View>
            <StyledCard
              marginBottom={Platform.OS == 'ios' ? hp('6%') : hp('5%')}>
              <Text
                color={colors.primary}
                height="auto"
                textAlign="left"
                fontWeight="bold"
                marginTop={hp('1%')}>
                Pay-out history
              </Text>
              <View
                height="auto"
                flexDirection="row"
                justifyContent="space-between"
                marginTop={hp('2%')}>
                {period.map(item => (
                  <StyledTimeView
                    key={item.id}
                    height={`${hp('3.8%')}px`}
                    onPress={() =>
                      handleSelectPeriod({
                        type: 'SELECT_PERIOD',
                        payload: {
                          id: item.id,
                          period: item.time,
                        },
                      })
                    }
                    backgroundColor={item.active && colors.lightBrandPrimary}>
                    <Text color={colors.primary} fontSize={wp('3.7%')}>
                      {item.time}
                    </Text>
                  </StyledTimeView>
                ))}
              </View>
              <FlatList
                data={transactionHistoryMock}
                renderItem={ListItem}
                keyExtractor={item => item.id}
              />
              {/* {transactionHistoryMock.map((transaction, index) => (

              ))} */}
            </StyledCard>
          </StyledBodyContent>
        </StyledBody>
      </StyledMainContainer>
    </Fragment>
  );
};

export default History;
