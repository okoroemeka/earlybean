import React, {Fragment, useState} from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderStatus from '../../components/Reusable/HeaderStatus';
import Text from '../../components/UI/TextRemade';
import View from '../../components/UI/View';
import ImageRemade from '../../components/UI/ImageRemade';
import Button from '../../components/UI/Button';
import mockData from '../../../data/mockData';
import {colors, images} from '../../core';
import CardHeader from '../../components/Reusable/CardHeader';
import ModalContainer from '../../components/UI/ModalContainer';
import SavingsCard from '../../components/Reusable/SavingsCard';
import AddSavingsGoal from '../../components/UI/AddSavingsGoal';

const StyledWrapper = styled.ScrollView`
  flex: 1;
`;
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
const {tasksMockData} = mockData;

const ViewChildSavings = props => {
  const [showModal, setShowModal] = useState(false);

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
   * Render savings plans
   */
  const renderSavings = () => {
    return mockData.Savings.map((data, index) => (
      <SavingsCard
        key={index}
        purpose={data.purpose}
        amount={data.goalAmount}
        completionRate={data.completionRate}
        constribution={data.constributionSoFar}
        deadLine={data.deadLine}
        interestRate={data.interestRate}
        isNotInterestRate={true}
        isEditIcon
        handlePress={() => null}
      />
    ));
  };
  return (
    <Fragment>
      <StyledWrapper>
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
          </View>
        </StyledHeaderWrapper>
        <StyledUserDetials>
          <View flexDirection="row" alignItems="center" justifyContent="center">
            <View width="49%" paddingTop={hp('1%')}>
              <Text fontSize={wp('2%')}>TOTAL SAVED</Text>
              <Text
                fontSize={wp('3.5%')}
                fontWeight="bold"
                marginTop={hp('0.3%')}>
                N14,397.40
              </Text>
              <Text
                fontSize={wp('2.5%')}
                marginTop={hp('0.2%')}
                color={colors.buttonColor}>
                N1,500 to be paid if all task are completed
              </Text>
            </View>
          </View>
        </StyledUserDetials>
        <StyledBodyContent>
          <View
            height="auto"
            marginTop={hp('2%')}
            paddingLeft={wp('4%')}
            paddingRight={wp('4%')}>
            {renderSavings()}
          </View>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            height="auto"
            marginBottom={wp('8%')}
            marginTop={hp('2%')}>
            <View width="auto" height="auto" marginRight={wp('1%')}>
              <Button
                backgroundColor={colors.white}
                borderRadius="13px"
                borderWidth="1px"
                paddingLeftRight={wp('3%')}
                borderColor={colors.primary}>
                <Text width="auto" color={colors.primary} fontSize={wp('3.5%')}>
                  Boost savings
                </Text>
              </Button>
            </View>
            <View width="auto" height="auto" marginLeft={wp('2%')}>
              <Button
                handlePress={toggleModal}
                borderRadius="13px"
                borderWidth="1px"
                paddingLeftRight={wp('3%')}>
                <Text width="auto" fontSize={wp('3.5%')}>
                  +Add a goal
                </Text>
              </Button>
            </View>
          </View>
        </StyledBodyContent>
        {showModal && (
          <ModalContainer>
            <AddSavingsGoal handleToggleModal={toggleModal} />
          </ModalContainer>
        )}
      </StyledWrapper>
    </Fragment>
  );
};

export default ViewChildSavings;
