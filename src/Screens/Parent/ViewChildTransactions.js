import React, {Fragment, useReducer} from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderStatus from '../../components/Reusable/HeaderStatus';
import Text from '../../components/UI/TextRemade';
import View from '../../components/UI/View';
import ImageRemade from '../../components/UI/ImageRemade';
import mockData from '../../../data/mockData';
import CustomIcon from '../../core/CustomIcon';
import {colors, images} from '../../core';
import Button from '../../components/UI/Button';
import CardHeader from '../../components/Reusable/CardHeader';
import Line from '../../components/UI/Line';
import Reducers from '../../../utils/Reducers';

const StyledHeaderWrapper = styled.View`
  width: 100%;
  height: ${hp('24%')}px;
  background-color: ${colors.primary};
  padding: 0 ${wp('3%')}px;
`;

const StyledImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${colors.childImageWrapperColor};
`;
const StyledImageSubWrapper = styled.View`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  overflow: hidden;
`;

const StyledCard = styled.TouchableOpacity`
  width: 48%;
  height: ${hp('21.5%')}px;
  align-items: center;
  justify-content: center;
  padding: ${hp('1.5%')}px ${wp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  background-color: ${props => props.backgroundColor || '#fdfdfd'};
  border-radius: 25px;
  box-shadow: ${props =>
    props.boxShadow || '0px 0px 30px rgba(0, 0, 0, 0.0637566)'};
`;
const StyledIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: ${hp('0.5%')}px;
  background-color: ${props =>
    props.backgroundColor || colors.lightBrandPrimary};
`;
const StyledTouchable = styled.TouchableOpacity``;

const {savingsMockData} = mockData;
const {SavingsReducer} = Reducers;

const ChildTransactionScreen = props => {
  const [savingsData, setDispatchSavingsData] = useReducer(
    SavingsReducer,
    savingsMockData,
  );
  const {
    navigation: {goBack, navigate},
  } = props;
  /**
   * Handle press
   * @param {number} id
   */
  const handlePress = id => {
    setDispatchSavingsData({
      type: 'SELECT_ITEM',
      payload: {
        id,
      },
    });
  };

  const actionHelper = title => {
    switch (title.toLowerCase()) {
      case 'earnings':
        return () => navigate('ViewEarningsScreen');
      case 'savings':
        return () => navigate('ViewEarningsScreen');
      case 'givings':
        return () => navigate('ViewEarningsScreen');
      case 'Spendings':
        return () => navigate('ViewEarningsScreen');

      default:
        return;
    }
  };

  return (
    <Fragment>
      <HeaderStatus />
      <StyledHeaderWrapper>
        <CardHeader handleGoback={() => goBack()} />
        <View alignItems="center">
          <StyledImageWrapper>
            <StyledImageSubWrapper>
              <ImageRemade imageUrl={images.userAvater} />
            </StyledImageSubWrapper>
          </StyledImageWrapper>
          <Text color={colors.white} marginTop={hp('0.5%')}>
            Xavier
          </Text>
          <View
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            height="auto">
            <CustomIcon name="NairaIcon" size={15} color={colors.white} />
            <Text
              color={colors.white}
              marginTop={hp('0.5%')}
              marginLeft={wp('0.8%')}
              width="auto"
              fontSize={wp('5%')}
              fontWeight="bold">
              72,397.40
            </Text>
          </View>
        </View>
      </StyledHeaderWrapper>
      <View
        backgroundColor={colors.milkWhite}
        alignItems="center"
        paddingTop={hp('3.5%')}
        paddingBottom={hp('3%')}>
        <View
          flexDirection="row"
          flexWrap="wrap"
          height="auto"
          justifyContent="space-between"
          width="90%">
          {savingsData.map((item, index) => (
            <StyledCard
              key={index}
              onPress={() => handlePress(item.id)}
              backgroundColor={item.active && colors.primary}
              boxShadow={
                item.active && '0px 3px 8px rgba(99, 47, 127, 0.662342)'
              }>
              <Text
                fontSize={wp('3%')}
                color={item.active ? colors.white : colors.primary}
                textTransform="uppercase">
                {item.title}
              </Text>
              <StyledIconWrapper
                backgroundColor={item.active && colors.lightBrandPrimary}>
                <CustomIcon
                  name={item.iconName}
                  color={item.active ? colors.white : colors.primary}
                  size={35}
                />
              </StyledIconWrapper>
              <View
                flexDirection="row"
                height="auto"
                alignItems="center"
                justifyContent="center">
                <CustomIcon
                  name="NairaIcon"
                  color={item.active ? colors.white : colors.primary}
                  size={14}
                />
                <Text
                  color={item.active ? colors.white : colors.primary}
                  width="auto"
                  fontSize={wp('4.2%')}>
                  {item.amount}
                </Text>
              </View>
              <Text
                color={item.active ? colors.white : colors.primary}
                width="auto"
                fontSize={wp('2.5%')}>
                Last {item.title == 'Spendings' ? 'spent' : 'saved'}: 09,Aug
                2019
              </Text>
              <View height="auto" width="30%">
                <StyledTouchable onPress={actionHelper(item.title)}>
                  <Text
                    color={item.active ? colors.white : colors.primary}
                    width="auto"
                    fontSize={wp('2%')}
                    marginTop={hp('0.5%')}
                    textTransform="uppercase">
                    view more
                  </Text>
                  <Line />
                </StyledTouchable>
              </View>
            </StyledCard>
          ))}

          {/* <StyledCard>
            <Text color={colors.primary}>Savings</Text>
          </StyledCard>
          <StyledCard>
            <Text color={colors.primary}>Savings</Text>
          </StyledCard>
          <StyledCard>
            <Text color={colors.primary}>Savings</Text>
          </StyledCard> */}
        </View>
        <View height="auto" alignItems="center" marginTop={hp('1.5%')}>
          <Button width="80%" borderRadius="10px">
            <Text>+ Add money</Text>
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default ChildTransactionScreen;
