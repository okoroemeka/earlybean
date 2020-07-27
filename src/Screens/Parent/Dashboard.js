import React, {Fragment} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import InfoCard from '../../components/UI/InfoCard';
import InstructionCard from '../../components/UI/InstructionCard';
import Text from '../../components/UI/Text';
import DashboarddHeader from '../../components/Reusable/DashboarddHeader';
import RoundButton from '../../components/UI/RoundButton';

const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;
const StyledStatusBar = styled.StatusBar``;
const StyledBodyContent = styled.ScrollView``;
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
  margin-top: ${hp('10.5%')}px;
  margin-bottom: ${hp('4.5%')}px;
`;
const StyledIntroTextWrapper = styled.View`
  width: 100%;
  padding-left: ${Platform.OS == 'android' ? wp('5%') : wp('7%')}px;
  margin-top: ${hp('3%')}px;
  margin-bottom: ${hp('1.5%')}px;
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
const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  border-radius: ${props => props.borderRadius || '0px'};
`;
const StyledImage = styled.Image`
  width: ${wp('3.5%')}px;
  height: ${hp('2%')}px;
`;
const StyledInfoWrapper = styled.View`
  width: 100%;
  height: ${hp('25%')}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Dashboard = ({navigation: {navigate}}) => {
  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledMainContainer>
        <StyledStatusBar barStyle="light-content" />
        <StyledHeader>
          <DashboarddHeader
            userFirstName="Biobele"
            accountId={1209988666}
            heading="Financial overview"
            subHeading="Overall balance"
            amount="25,000,000"
            headerHeight={Platform.OS == 'ios' ? '92%' : '100%'}
          />
        </StyledHeader>
        <StyledBody>
          <StyledBodyContent>
            <StyledIntroTextWrapper>
              <Text
                fontFamily="Avenir"
                color={colors.placeholderColor}
                textAlign={'left'}
                fontWeight="bold">
                LET’S GET STARTED!
              </Text>
            </StyledIntroTextWrapper>
            <StyledInfoWrapper>
              <InfoCard
                width={wp('42%')}
                height={hp('15%')}
                borderRadius={Platform.OS == 'ios' ? '40px' : '30px'}>
                <StyledText
                  fontWeight="bold"
                  color={colors.primary}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  Save 10k monthly
                </StyledText>
                <StyledText
                  color={colors.placeholderColor}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  Earn 6.5% per annum
                </StyledText>
              </InfoCard>
              <InfoCard
                flexDirection="row"
                paddingLeftRight={wp('6%')}
                width={wp('42%')}
                height={hp('15%')}
                borderRadius={Platform.OS == 'ios' ? '40px' : '30px'}>
                <StyledText
                  width="80%"
                  fontWeight="bold"
                  color={colors.primary}
                  textAlign="left"
                  paddingLeftRight={wp('3%')}
                  fontSize={wp('3%')}>
                  Create a custom savings plan
                </StyledText>
                <StyledButton
                  backgroundColor={colors.buttonColor}
                  onPress={() => null}
                  borderRadius="20px"
                  width="40px"
                  height="40px">
                  <StyledImage source={images.plusIcon} />
                </StyledButton>
              </InfoCard>
              <InfoCard
                width={wp('42%')}
                height={hp('15%')}
                borderRadius={Platform.OS == 'ios' ? '40px' : '30px'}>
                <StyledText
                  fontWeight="bold"
                  color={colors.primary}
                  fontSize={wp('3%')}
                  textAlign="left">
                  Save and earn towards school fees.
                </StyledText>
                <StyledText
                  color={colors.placeholderColor}
                  fontSize={wp('3%')}
                  textAlign="left">
                  Earn up to 10% per annum.
                </StyledText>
              </InfoCard>
              <InfoCard
                flexDirection="row"
                paddingLeftRight={wp('6%')}
                width={wp('42%')}
                height={hp('15%')}
                borderRadius={Platform.OS == 'ios' ? '40px' : '30px'}>
                <StyledText
                  width="80%"
                  fontWeight="bold"
                  color={colors.primary}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  Add a child
                </StyledText>
                <RoundButton
                  backgroundColor={colors.buttonColor}
                  buttonBorderRadius="20px"
                  buttonWidth="40px"
                  buttonHeight="40px">
                  <StyledImage source={images.plusIcon} />
                </RoundButton>
              </InfoCard>
            </StyledInfoWrapper>
            <StyledInstructionWrapper>
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
                    Set Perosnal Goals
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
                    Set Family Goals
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
                    Create a cash trust fund
                  </StyledText>
                </StyledTextWrapper>
              </InstructionCard>
            </StyledInstructionWrapper>
          </StyledBodyContent>
        </StyledBody>
      </StyledMainContainer>
    </Fragment>
  );
};

export default Dashboard;
