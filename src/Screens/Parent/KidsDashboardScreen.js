import React, {Fragment, useState, useReducer} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderStatus from '../../components/Reusable/HeaderStatus';
import DashboardHeaderContainer from '../../components/Reusable/DashboardHeaderContainer';
import DashboarddHeader from '../../components/Reusable/DashboarddHeader';
import MainBodyContent from '../../components/Reusable/MainBodyContent';
import DashboardBody from '../../components/Reusable/DashboardBody';
import Text from '../../components/UI/TextRemade';
import View from '../../components/UI/View';
import ImageRemade from '../../components/UI/ImageRemade';
import mockData from '../../../data/mockData';
import CustomIcon from '../../core/CustomIcon';
import {colors, images} from '../../core';
import Button from '../../components/UI/Button';
import ModalContainer from '../../components/UI/ModalContainer';
import Reducers from '../../../utils/Reducers';
import AddChildCard from '../../components/UI/AddChildCard';

const StyledBodyContent = styled.ScrollView`
  padding: ${hp('4%')}px ${wp('4.8%')}px;
`;

const StyledCard = styled.View`
  width: 100%;
  height: auto;
  border-radius: 30px;
  padding: ${hp('1%')}px ${wp('4%')}px;
  background-color: #fdfdfd;
  margin-bottom: ${props => props.marginBottom || 0}px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.0637566);
`;
const StyledLine = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '0%'};
  border-bottom-width: ${props => props.borderWidth || 1}px;
  border-bottom-color: ${props => props.borderColor || colors.primary};
  position: ${props => props.position || 'relative'};
`;
const StyledAddChildCard = styled.View`
  width: 23%;
  height: ${hp('11%')}px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${colors.primary};
  border-radius: 10px;
`;
const StyledChildCard = styled.TouchableOpacity`
  width: 31%;
  height: ${hp('11%')}px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.0523656);
  background-color: ${props => props.backgroundColor || colors.white};
`;
const StyledRoundButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-bottom: ${hp('1%')}px;
  border: 1px solid ${colors.primary};
`;
const StyledPlus = styled.Text`
  color: ${colors.primary};
`;
const StyledChildCardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  height: auto;
`;
const StyledOuterImageWrapper = styled.View`
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp('0.5%')}px;
  border-radius: 17px;
  background-color: ${props => props.backgroundColor || colors.white};
`;

const StyledImageWrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
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

const {initialKidsState, transactionTime, mockTransactions} = mockData;
const {KidsReducer} = Reducers;

const KidsDashboardHomeScreen = props => {
  const [selectedChild, setSelectedChild] = useState({});
  const [selectPeriod, setSelectPeriod] = useState('');
  const [kids, dispatchSetKids] = useReducer(
    KidsReducer({
      initialKidsState,
    }),
    initialKidsState,
  );
  const [period, dispatchSetPeriod] = useReducer(
    KidsReducer({
      transactionTime,
    }),
    transactionTime,
  );
  const [showModal, setShowModal] = useState(false);

  /**
   * Toggle modal
   */
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  /**
   * Handle select kid
   * @param {object} data
   * @returns {function} dispatchSetKids
   */
  const handleSelectKid = data => {
    setSelectedChild({
      firstName: data.payload.firstName,
      lastName: data.payload.lastName,
    });
    return dispatchSetKids(data);
  };

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

  return (
    <Fragment>
      <HeaderStatus />
      <MainBodyContent>
        <DashboardHeaderContainer>
          <DashboarddHeader
            dashboardNumber={1}
            userFirstName="Biobele"
            accountId={1209988666}
            heading="let's see how your kids are growing financially"
            subHeading="Kids balance"
            amount="25,000,000"
            headerHeight={Platform.OS == 'ios' ? '92%' : '100%'}
          />
        </DashboardHeaderContainer>
        <DashboardBody paddingBottom={`${hp('3.8%')}px`}>
          <StyledBodyContent>
            <StyledCard
              marginBottom={Platform.OS == 'ios' ? hp('2%') : hp('5%')}>
              <Text
                textAlign="left"
                color={colors.primary}
                marginTop={hp('1%')}
                fontSize={wp('4.2%')}>
                Kids
              </Text>
              <StyledLine>
                <View
                  height="auto"
                  width="75%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  position="absolute"
                  top={-1}>
                  <StyledLine borderWidth={2} width="30%" />
                </View>
              </StyledLine>
              <View
                height="auto"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginTop={hp('1%')}>
                <StyledChildCardWrapper>
                  {kids.map(kid => (
                    <StyledChildCard
                      backgroundColor={kid.active && colors.primary}
                      key={kid.id}
                      onPress={() =>
                        handleSelectKid({
                          type: 'SELECTCHILD',
                          payload: {
                            id: kid.id,
                            firstName: kid.firstName,
                            lastName: kid.lastName,
                          },
                        })
                      }>
                      <StyledOuterImageWrapper
                        backgroundColor={kid.active ? '#D74E79' : colors.white}>
                        <StyledImageWrapper>
                          <ImageRemade imageUrl={kid.imageUrl} />
                        </StyledImageWrapper>
                      </StyledOuterImageWrapper>

                      <Text
                        color={kid.active ? colors.white : colors.primary}
                        fontSize={wp('2.8%')}>
                        {kid.firstName}
                      </Text>
                      <Text
                        color={kid.active ? colors.white : colors.primary}
                        fontSize={wp('2.8%')}>
                        {kid.lastName}
                      </Text>
                    </StyledChildCard>
                  ))}
                </StyledChildCardWrapper>
                <StyledAddChildCard marginLeft="auto">
                  <StyledRoundButton>
                    <StyledPlus onPress={toggleModal}>+</StyledPlus>
                  </StyledRoundButton>
                  <Text color={colors.primary} fontSize={wp('2%')}>
                    {' '}
                    Add a child
                  </Text>
                </StyledAddChildCard>
              </View>
              <View
                height="auto"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginTop={hp('5%')}>
                <View height="auto" width="48%">
                  <Text
                    color={colors.primary}
                    textAlign="left"
                    marginTop={hp('1%')}>
                    Javiar Lawson
                  </Text>
                </View>
                <View
                  height="auto"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  width="48%">
                  <CustomIcon
                    name="NairaIcon"
                    size={13}
                    color={colors.primary}
                  />
                  <Text
                    color={colors.primary}
                    width="auto"
                    textAlign="left"
                    fontSize={wp('3.5%')}
                    marginTop={hp('0.35%')}>
                    500,567.2
                  </Text>
                </View>
              </View>
              <View
                height="auto"
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginTop={hp('1%')}>
                <CustomIcon name="location" size={10} color={colors.primary} />

                <Text
                  width="auto"
                  color={colors.primary}
                  fontSize={wp('3.2%')}
                  marginLeft={wp('1.5%')}>
                  Lagos,Nigeria
                </Text>
              </View>
              <View
                height="auto"
                width="30%"
                display="flex"
                flexDirection="row">
                <View width="auto" height="auto" marginRight={wp('0.3%')}>
                  <CustomIcon
                    name="star"
                    color={colors.brandYellow}
                    size={13}
                  />
                </View>
                <View width="auto" height="auto" marginRight={wp('0.8%')}>
                  <CustomIcon
                    name="star"
                    color={colors.brandYellow}
                    size={13}
                  />
                </View>
                <View width="auto" height="auto" marginRight={wp('0.8%')}>
                  <CustomIcon
                    name="star"
                    color={colors.brandYellow}
                    size={13}
                  />
                </View>
                <View width="auto" height="auto" marginRight={wp('0.8%')}>
                  <CustomIcon
                    name="star"
                    color={colors.brandYellow}
                    size={13}
                  />
                </View>
                <View width="auto" height="auto" marginRight={wp('0.8%')}>
                  <CustomIcon
                    name="star"
                    color={colors.brandYellow}
                    size={13}
                  />
                </View>

                <Text
                  width="auto"
                  color={colors.placeholderColor}
                  fontSize={wp('3%')}>
                  (5.0)
                </Text>
              </View>
              <View
                height="auto"
                display="flex"
                flexDirection="row"
                marginTop={hp('2.5%')}>
                <View height="auto" width="50%" flexDirection="row">
                  <StyledUtilView backgroundColor={colors.lightGreen}>
                    <CustomIcon
                      name="up-arrow"
                      color={colors.greenBrand}
                      size={18}
                    />
                  </StyledUtilView>
                  <View width="auto" height="auto">
                    <Text
                      color={colors.primary}
                      textAlign="left"
                      fontSize={wp('3.1%')}
                      marginLeft={wp('2.5%')}>
                      Earning
                    </Text>
                    <View
                      height="auto"
                      flexDirection="row"
                      marginLeft={wp('2%')}
                      marginTop={hp('0.1%')}>
                      <View width="auto" height="auto" marginTop={hp('0.3%')} />
                      <Text
                        color="#042C5C"
                        width="auto"
                        textAlign="left"
                        fontSize={wp('3.3%')}>
                        N{'5,000'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View height="auto" width="50%" flexDirection="row">
                  <StyledUtilView backgroundColor={colors.lightRed}>
                    <CustomIcon
                      name="down-arrow"
                      color={colors.wineRed}
                      size={18}
                    />
                  </StyledUtilView>
                  <View width="auto" height="auto">
                    <Text
                      color={colors.primary}
                      textAlign="left"
                      fontSize={wp('3.1%')}
                      marginLeft={wp('2.5%')}>
                      Earning
                    </Text>
                    <View
                      height="auto"
                      flexDirection="row"
                      marginLeft={wp('2%')}
                      marginTop={hp('0.1%')}>
                      <Text
                        color="#042C5C"
                        width="auto"
                        textAlign="left"
                        fontSize={wp('3.3%')}>
                        N{'5,000'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                height="auto"
                flexDirection="row"
                marginTop={hp('2.5%')}
                marginBottom={hp('2.5%')}
                justifyContent="center"
                alignItems="center">
                <Button
                  flexDirection="row"
                  width="100%"
                  height={`${hp('4.3%')}px`}
                  backgroundColor={colors.primary}
                  borderRadius="10px">
                  <Text width="auto">view</Text>
                  <ImageRemade
                    imageUrl={images.nextIcon}
                    imageWidth={`${wp('7.1%')}px`}
                    imageHeight={`${hp('1.8%')}px`}
                    marginLeft="auto"
                    marginTop={`${hp('0.25%')}px`}
                  />
                </Button>
              </View>
            </StyledCard>
            <StyledCard
              marginBottom={Platform.OS == 'ios' ? hp('6%') : hp('5%')}>
              <Text
                color={colors.primary}
                height="auto"
                textAlign="left"
                fontWeight="bold"
                marginTop={hp('1%')}>
                Most recent transactions
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
              {mockTransactions.map(transaction => (
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
                      {transaction.title}
                    </Text>
                    <Text
                      color={colors.placeholderColor}
                      fontSize={wp('2.5%')}
                      textTransform="capitalize"
                      textAlign="left">
                      {transaction.time}
                    </Text>
                  </View>
                  <View height="auto" width="20%">
                    <StyledUtilView
                      backgroundColor={
                        transaction.type == 'expenses'
                          ? colors.lightGreen
                          : colors.lightRed
                      }>
                      <CustomIcon
                        name={
                          transaction.type == 'expenses'
                            ? 'up-arrow'
                            : 'down-arrow'
                        }
                        color={
                          transaction.type == 'expenses'
                            ? colors.greenBrand
                            : colors.wineRed
                        }
                        size={18}
                      />
                    </StyledUtilView>
                  </View>
                  <View height="auto" width="20%">
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={12}>
                      {' '}
                      N{'2,000'}
                    </Text>
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={10}>
                      {' '}
                      N{'6,700'}
                    </Text>
                  </View>
                </View>
              ))}
            </StyledCard>
          </StyledBodyContent>
        </DashboardBody>
      </MainBodyContent>
      {showModal && (
        <ModalContainer>
          <AddChildCard handleToggleModal={toggleModal} />
        </ModalContainer>
      )}
    </Fragment>
  );
};

export default KidsDashboardHomeScreen;
