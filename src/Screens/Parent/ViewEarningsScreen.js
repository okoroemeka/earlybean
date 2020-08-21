import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native';

import HeaderStatus from '../../components/Reusable/HeaderStatus';
import Text from '../../components/UI/TextRemade';
import View from '../../components/UI/View';
import ImageRemade from '../../components/UI/ImageRemade';
import mockData from '../../../data/mockData';
import CustomIcon from '../../core/CustomIcon';
import {colors, images} from '../../core';
import CardHeader from '../../components/Reusable/CardHeader';
import Line from '../../components/UI/Line';
import RoundButton from '../../components/UI/RoundButton';
import ModalContainer from '../../components/UI/ModalContainer';
import EditCompoundInterest from '../../components/UI/EditCompoundInterest';
import AddAllowance from '../../components/UI/AddAllowance';

const StyledHeaderWrapper = styled.View`
  width: 100%;
  height: ${hp('22.5%')}px;
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
const StyledUserDetials = styled.View`
  width: 100%;
  height: ${hp('10%')}px;
  background-color: ${colors.primary};
  padding: 0 ${wp('3%')}px;
  box-shadow: 0px -3px 1px rgba(0, 0, 0, 0.237566);
`;
const StyledBodyContent = styled.ScrollView`
  width: 100%;
  background-color: ${colors.milkWhite};
`;
const StyledView = styled.View`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin-left: ${props => props.marginLeft || 'auto'};
`;
const StyledTouchable = styled.TouchableOpacity`
  margin-right: ${wp('1%')}px;
`;

const StyledBox = styled.View`
  width: 50px;
  height: 90%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

const StyledIconWrapper = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.lightBrandPrimary};
`;
const {tasksMockData} = mockData;

function taskItem({item}) {
  return (
    <View
      marginTop={hp('2%')}
      flexDirection="row"
      alignItems="center"
      height={`${hp('6.5%')}px`}
      backgroundColor={colors.white}
      borderRadius={10}
      boxShadow="0px 0px 30px rgba(0, 0, 0, 0.0637566)"
      paddingLeft={wp('2%')}
      paddingRight={wp('2%')}>
      <StyledBox>
        <StyledIconWrapper>
          <CustomIcon name="earningIcon" color={colors.white} size={25} />
        </StyledIconWrapper>
      </StyledBox>
      <View width="auto" height="auto" paddingLeft={wp('3%')}>
        <Text
          fontSize={wp('3.5%')}
          textTransform="capitalize"
          textAlign="left"
          color={colors.primary}
          width="auto">
          {item.title}
        </Text>
        <Text
          textTransform="capitalize"
          fontSize={wp('3%')}
          color={colors.placeholderColor}
          width="auto">
          {item.date}
        </Text>
      </View>

      <StyledView flexDirection="row">
        {item.reward == 'cash' ? (
          <Text
            color={
              item.status == 'completed'
                ? colors.greenBrand
                : colors.placeholderColor
            }
            width="auto"
            fontWeight="bold">
            {item.amount}
          </Text>
        ) : (
          <View flexDirection="row" width="auto" height="auto">
            <StyledView width={`${wp('4%')}px`} height={`${hp('2%')}px`}>
              <ImageRemade
                imageUrl={images.beanCoin}
                imageWidth="100%"
                imageHeight="100%"
              />
            </StyledView>
            <StyledView width={`${wp('4%')}px`} height={`${hp('2%')}px`}>
              <ImageRemade
                imageUrl={images.beanCoin}
                imageWidth="100%"
                imageHeight="100%"
              />
            </StyledView>
            <StyledView width={`${wp('4%')}px`} height={`${hp('2%')}px`}>
              <ImageRemade
                imageUrl={images.beanCoin}
                imageWidth="100%"
                imageHeight="100%"
              />
            </StyledView>
          </View>
        )}
        <View
          marginLeft={wp('2%')}
          flexDirection="column"
          width={`${wp('16%')}px`}
          height="auto"
          alignItems="center">
          <View
            width="26px"
            height="26px"
            borderRadius={13}
            alignItems="center"
            justifyContent="center"
            backgroundColor={
              item.status == 'completed'
                ? colors.greenBrand
                : item.status == 'mixed'
                ? colors.cancel
                : colors.placeholderColor
            }>
            {item.status != 'incomplete' &&
              (item.status == 'completed' ? (
                <ImageRemade
                  imageUrl={images.tick}
                  imageWidth="55%"
                  imageHeight="55%"
                />
              ) : (
                <CustomIcon name="cancel" size={10} color={colors.wineRed} />
              ))}
          </View>

          <Text
            textTransform="capitalize"
            fontSize={wp('2.6%')}
            color={
              item.status == 'completed'
                ? colors.greenBrand
                : item.status == 'mixed'
                ? colors.wineRed
                : colors.placeholderColor
            }
            width="auto">
            {item.status}
          </Text>
        </View>
      </StyledView>
    </View>
  );
}
const ViewEarningsScreen = props => {
  const [showModal, setShowModal] = useState(false);
  const [allowance, setAllowance] = useState('0');
  const [editAllowance, setEditAllowance] = useState(false);
  const [editCompoundInterest, setEditCompoundInterest] = useState(false);
  const {
    navigation: {goBack, navigate},
  } = props;

  /**
   * Toggle modal
   */
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles edit allowance
   */
  const handleEditCompoundInterest = () => {
    toggleModal();
    setEditAllowance(false);
    setEditCompoundInterest(!editCompoundInterest);
  };

  /**
   * Handle add allowance
   */
  const handleAddAllowance = () => {
    toggleModal();
    setEditCompoundInterest(false);
    setEditAllowance(!editAllowance);
  };

  /**
   * Updates selected allowance
   * @param {string} newAllowance
   */
  const handleSelectAllowance = newAllowance => {
    setAllowance(newAllowance);
  };

  return (
    <Fragment>
      <HeaderStatus />
      <StyledHeaderWrapper>
        <CardHeader
          handleGoback={() => goBack()}
          cardTitle="Earnings"
          fontSize={wp('4.5%')}
        />
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
      <StyledUserDetials>
        <View flexDirection="row" alignItems="center" justifyContent="center">
          <View width="49%" paddingTop={hp('1%')}>
            <Text fontSize={wp('2%')}>TOTAL BALANCE</Text>
            <Text
              fontSize={wp('3.5%')}
              fontWeight="bold"
              marginTop={hp('0.3%')}>
              N72,397.40
            </Text>
            <Text
              fontSize={wp('2.5%')}
              marginTop={hp('0.2%')}
              color={colors.buttonColor}>
              N1,500 to be paid if all task are completed
            </Text>
          </View>
          <Line
            width="0.5px"
            height="90%"
            backgroundColor={colors.buttonColor}
          />
          <View width="49%" paddingTop={hp('1%')} alignItems="center">
            <Text fontSize={wp('2%')}>BEANCOIN BALANCE</Text>
            <Text
              fontSize={wp('3.5%')}
              fontWeight="bold"
              marginTop={hp('0.3%')}>
              100,000BC
            </Text>
            <View width="75%">
              <Text
                fontSize={wp('2.5%')}
                marginTop={hp('0.2%')}
                color={colors.buttonColor}
                width="30%">
                200 to be paid on remaining task.
              </Text>
            </View>
          </View>
        </View>
      </StyledUserDetials>
      <StyledBodyContent>
        <View
          height="auto"
          marginTop={hp('2%')}
          paddingLeft={wp('4%')}
          paddingRight={wp('4%')}>
          <View
            flexDirection="row"
            alignItems="center"
            height={`${hp('6%')}px`}
            backgroundColor={colors.white}
            borderRadius={10}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.0637566)"
            paddingLeft={wp('2%')}
            paddingRight={wp('2%')}>
            <Text
              textTransform="capitalize"
              color={colors.primary}
              width="auto">
              allowance
            </Text>
            <StyledView>
              <StyledTouchable onPress={handleAddAllowance}>
                <CustomIcon
                  name="editIcon"
                  color={colors.placeholderColor}
                  size={12}
                />
              </StyledTouchable>

              <Text
                color={colors.greenBrand}
                fontWeight="bold"
                width="auto"
                fontSize={wp('3%')}>
                N{allowance}
              </Text>
              <Text
                textTransform="capitalize"
                fontSize={wp('3.5%')}
                width="auto"
                color={colors.placeholderColor}>
                /week
              </Text>
            </StyledView>
          </View>
          <View
            marginTop={hp('2%')}
            flexDirection="row"
            alignItems="center"
            height={`${hp('6%')}px`}
            backgroundColor={colors.white}
            borderRadius={10}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.0637566)"
            paddingLeft={wp('2%')}
            paddingRight={wp('2%')}>
            <Text
              textTransform="capitalize"
              color={colors.primary}
              width="auto">
              Compound Interest
            </Text>
            <StyledView>
              <StyledTouchable onPress={handleEditCompoundInterest}>
                <CustomIcon
                  name="editIcon"
                  color={colors.placeholderColor}
                  size={12}
                />
              </StyledTouchable>

              <Text
                color={colors.greenBrand}
                fontWeight="bold"
                width="auto"
                fontSize={wp('3.5%')}>
                5.5%
              </Text>
              <Text
                textTransform="capitalize"
                fontSize={wp('3.5%')}
                width="auto"
                color={colors.placeholderColor}>
                /month
              </Text>
            </StyledView>
          </View>
          <View
            marginTop={hp('2%')}
            flexDirection="row"
            alignItems="center"
            height={`${hp('6%')}px`}
            backgroundColor={colors.white}
            borderRadius={10}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.0637566)"
            paddingLeft={wp('2%')}
            paddingRight={wp('2%')}>
            <Text
              textTransform="capitalize"
              color={colors.primary}
              width="auto">
              pod earnings
            </Text>
            <StyledView>
              <Text
                color={colors.greenBrand}
                fontWeight="bold"
                width="auto"
                fontSize={wp('3.5%')}>
                N12,397
              </Text>
              <View width="auto" height="auto" marginLeft={wp('1%')}>
                <Text
                  fontSize={wp('2%')}
                  width="auto"
                  color={colors.placeholderColor}>
                  Last pay-in
                </Text>
                <Text
                  fontSize={wp('2.5%')}
                  width="auto"
                  color={colors.placeholderColor}>
                  May 29th
                </Text>
              </View>
            </StyledView>
          </View>
        </View>
        <View height="auto" marginTop={hp('3.5%')} marginBottom={hp('2.5%')}>
          <View paddingLeft={wp('4%')} paddingRight={wp('4%')} height="auto">
            <Text
              color={colors.primary}
              fontWeight="bold"
              fontSize={wp('4.3')}
              textAlign="left">
              Task completed this week
            </Text>
            <View height="auto" marginTop={hp('0.1%')}>
              <Line borderColor={colors.dropDownItemBackground} width="20%" />
            </View>
          </View>

          <View>
            <View height={`${hp('34%')}px`}>
              <FlatList
                data={tasksMockData}
                renderItem={taskItem}
                keyExtractor={item => item.id}
                paddingLeft={wp('4%')}
                paddingRight={wp('4%')}
              />
            </View>
            <View height="auto" alignItems="center" marginTop={hp('2.5%')}>
              <RoundButton
                handlePress={() => navigate('AddTaskScreen')}
                backgroundColor={colors.buttonColor}
                buttonWidth="30px"
                buttonHeight="30px"
                buttonBorderRadius="15px">
                <Text
                  fontWeight="bold"
                  fontSize={wp('4%')}
                  width="auto"
                  color={colors.primary}>
                  +
                </Text>
              </RoundButton>
            </View>
          </View>
        </View>
      </StyledBodyContent>
      {showModal && (
        <ModalContainer>
          {editAllowance ? (
            <AddAllowance
              handleToggleModal={toggleModal}
              getSelectedAllowance={handleSelectAllowance}
            />
          ) : (
            <EditCompoundInterest handleToggleModal={toggleModal} />
          )}
        </ModalContainer>
      )}
    </Fragment>
  );
};

export default ViewEarningsScreen;
