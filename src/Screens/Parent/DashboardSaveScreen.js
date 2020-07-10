import React, {Fragment} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import InstructionCard from '../../components/UI/InstructionCard';
import DashboarddHeader from '../../components/Reusable/DashboarddHeader';
import RoundButton from '../../components/UI/RoundButton';
import CustomIcon from '../../core/CustomIcon';
import CashTrustDashboard from './CashTrustDashboard';
import ViewChildCashTrust from './ViewChildCashTrust';

const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;
const StyledBodyContent = styled.ScrollView`
  padding: ${hp('0%')}px ${wp('3%')}px;
`;
const StyledMainContainer = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: ${colors.milkWhite};
`;
const StyledHeader = styled.View`
  flex: ${Platform.OS == 'ios' ? 2 : 3};
  background-color: ${colors.primary};
`;

const StyledBody = styled.View`
  flex: 5;
`;
const StyledText = styled.Text`
  width: ${props => props.width || '100%'};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-family: ${props => props.fontFamily || 'Avenir'};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin-top: ${props => props.marginTop || hp('0%')}px;
  border-bottom-width: ${props => props.borderBottomWidth || wp('0%')}px;
  border-bottom-color: ${props => props.borderBottomcolor || colors.primary};
`;
const StyledInstructionWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${hp('2.5%')}px;
  margin-bottom: ${Platform.OS == 'android' ? hp('3.5%') : hp('7%')}px;
`;
const StyledInfoImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const StyledTextWrapper = styled.View`
  width: ${props => props.width || '100%'};
  height: 100%;
  padding-left: ${wp('4.5%')}px;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
`;

const StyledRoundButtonContainer = styled.View`
  position: absolute;
  top: ${Platform.OS == 'android' ? hp('10%') : hp('8%')}px;
  right: ${wp('10%')}px;
`;
const StyledViewAllPlansContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary};
`;

const DashboardOne = ({navigation: {navigate}}) => {
  const [viewAllPlan, setViewAllPlan] = React.useState(false);
  const [displayDetials, setDisplayDetails] = React.useState(false);

  const instructionWrapper = () => (
    <StyledInstructionWrapper>
      <InstructionCard
        width={wp('90%')}
        height={Platform.OS == 'ios' ? hp('20%') : hp('25%')}>
        <StyledInfoImage source={images.topUPImage} />
        <StyledTextWrapper>
          <StyledText
            width="50%"
            color={colors.primary}
            textAlign="left"
            paddingLeftRight={wp('5%')}
            fontSize={wp('5%')}>
            Top up an existing savings plan
          </StyledText>
        </StyledTextWrapper>
        <StyledRoundButtonContainer>
          <RoundButton
            backgroundColor={colors.primary}
            buttonBorderRadius="20px"
            buttonWidth="40px"
            buttonHeight="40px">
            <CustomIcon name="plus" size={20} color={colors.purpleSplash} />
          </RoundButton>
        </StyledRoundButtonContainer>
      </InstructionCard>
      <InstructionCard
        width={wp('90%')}
        height={Platform.OS == 'ios' ? hp('20%') : hp('25%')}>
        <StyledInfoImage source={images.setPersonalGoal} />
        <StyledTextWrapper>
          <StyledText
            width="40%"
            color={colors.primary}
            textAlign="left"
            paddingLeftRight={wp('5%')}
            fontSize={wp('5%')}>
            Create a personal plan
          </StyledText>
        </StyledTextWrapper>
      </InstructionCard>
      <InstructionCard
        width={wp('90%')}
        height={Platform.OS == 'ios' ? hp('20%') : hp('25%')}>
        <StyledInfoImage source={images.createTrust} />
        <StyledTextWrapper>
          <StyledText
            width="40%"
            color={colors.primary}
            textAlign="left"
            paddingLeftRight={wp('5%')}
            fontSize={wp('5%')}>
            Create a family savings plan
          </StyledText>
        </StyledTextWrapper>
      </InstructionCard>

      <InstructionCard
        width={wp('90%')}
        height={Platform.OS == 'ios' ? hp('20%') : hp('25%')}>
        <StyledInfoImage source={images.trustImage} />
        <StyledTextWrapper>
          <StyledText
            width="40%"
            color={colors.primary}
            textAlign="left"
            paddingLeftRight={wp('5%')}
            fontSize={wp('5%')}>
            Create a cash trust fund
          </StyledText>
        </StyledTextWrapper>
      </InstructionCard>
      <StyledViewAllPlansContainer onPress={() => setViewAllPlan(true)}>
        <StyledText color={colors.primary} fontSize={wp('3.5%')}>
          VIEW ALL PLAN
        </StyledText>
      </StyledViewAllPlansContainer>
    </StyledInstructionWrapper>
  );

  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledMainContainer>
        <StyledHeader>
          <DashboarddHeader
            dashboardNumber={1}
            userFirstName="Biobele"
            accountId={1209988666}
            heading="Financial overview"
            subHeading="TOTAL SAVED"
            amount="25,000,000"
            headerHeight={Platform.OS == 'ios' ? '92%' : '100%'}
          />
        </StyledHeader>
        <StyledBody>
          <StyledBodyContent>
            {!viewAllPlan ? (
              instructionWrapper()
            ) : (
              <CashTrustDashboard
                handleDisplayCashTrust={() =>
                  setDisplayDetails(!displayDetials)
                }
              />
            )}
          </StyledBodyContent>
        </StyledBody>
      </StyledMainContainer>
      {displayDetials && (
        <ViewChildCashTrust
          handleDisplayCashTrust={() => setDisplayDetails(!displayDetials)}
        />
      )}
    </Fragment>
  );
};

export default DashboardOne;
