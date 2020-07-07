import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import CreateTrustCard from '../../components/Reusable/CreateTrustCard';
import mockData from '../../../data/mockData';
import {colors} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import Button from '../../components/UI/Button';

const StyledWrapper = styled.View`
  flex: 1;
  padding-top: ${props => props.paddingTop || hp('3%')}px;
  align-items: center;
`;
const StyledButtonWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: ${Platform.OS == 'android' ? hp('5%') : hp('4%')}px;
  margin-bottom: ${hp('3%')}px;
  background-color: rgba(99, 47, 127, 0.3783);
  border-radius: ${wp('1.5%')}px;
`;
const StyledAddPlansContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary};
  margin-bottom: ${props => props.marginBottom || hp('3%')}px;
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
const CashTrustDashboard = props => {
  const [activeButton, setActiveButton] = React.useState(null);

  const renderCashTrust = () => {
    return mockData.createTrustMock.map((data, index) => (
      <CreateTrustCard
        key={index}
        userAvater={data.userAvater}
        userName={data.userFirstName}
        amount={data.amount}
        interestRate={data.interestRate}
      />
    ));
  };

  const toggleComponent = () => {
    if (activeButton == 'personal') {
      return null;
    }
    if (activeButton == 'family') {
      return null;
    }
    return renderCashTrust();
  };
  return (
    <StyledWrapper>
      <StyledButtonWrapper>
        <StyledButtonView
          width="35%"
          backGroundColor={activeButton == 'personal' && colors.primary}>
          <Button
            backgroundColor="transparent"
            paddingLeftRight={wp('3%')}
            width="100%"
            handlePress={() => setActiveButton('personal')}>
            <TextRemade fontSize={wp('3%')}>Personal Savings</TextRemade>
          </Button>
        </StyledButtonView>
        <StyledLine width="1px" height="70%" />
        <StyledButtonView
          width="35%"
          backGroundColor={activeButton == 'family' && colors.primary}>
          <Button
            backgroundColor="transparent"
            paddingLeftRight={wp('3%')}
            handlePress={() => setActiveButton('family')}
            width="100%">
            <TextRemade fontSize={wp('3%')}>Family Savings</TextRemade>
          </Button>
        </StyledButtonView>
        <StyledLine width="1px" height="70%" />
        <StyledButtonView
          width="29%"
          backGroundColor={activeButton == 'cash' && colors.primary}>
          <Button
            backgroundColor="transparent"
            paddingLeftRight={wp('3%')}
            handlePress={() => setActiveButton('cash')}
            width="100%">
            <TextRemade fontSize={wp('3%')}>Cash Trust</TextRemade>
          </Button>
        </StyledButtonView>
      </StyledButtonWrapper>
      {toggleComponent()}
      <StyledAddPlansContainer
        marginBottom={Platform.OS == 'ios' ? hp('7%') : hp('3%')}
        onPress={() => null}>
        <TextRemade color={colors.primary} fontSize={wp('3.5%')} width="auto">
          ADD A PLAN
        </TextRemade>
      </StyledAddPlansContainer>
    </StyledWrapper>
  );
};

export default CashTrustDashboard;
