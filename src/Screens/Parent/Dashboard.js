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
import Image from '../../components/UI/Image';
import CustomIcon from '../../core/CustomIcon';

const StyledInstructionWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${hp('10.5%')}px;
  margin-bottom: ${hp('1.5%')}px;
`;
const StyledHeaderStatus = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.primary};
`;
const StyledWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${colors.milkWhite};
`;
const StyledContainer = styled.SafeAreaView`
  flex: 1;
  margin-bottom: ${Platform.OS == 'ios' ? hp('0.8%') : hp('2%')}px;
`;
const StyledHeader = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${Platform.OS == 'ios' ? '17%' : '20%'};
  padding-top: ${hp('1%')}px;
  background-color: ${colors.primary};
`;
const StyledBody = styled.View`
  flex: 1;
  padding: ${hp('1%')}px ${wp('3%')}px;
`;

const StyledInfoWrapper = styled.View`
  width: 100%;
  height: ${hp('25%')}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledIntroTextWrapper = styled.View`
  width: 100%;
  padding-left: ${Platform.OS == 'android' ? wp('5%') : wp('7%')}px;
  margin-top: ${hp('3%')}px;
  margin-bottom: ${hp('1.5%')}px;
`;
const StyledStatusBar = styled.StatusBar``;
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
const StyledImage = styled.Image`
  width: ${wp('3.5%')}px;
  height: ${hp('2%')}px;
`;
const StyledInfoImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || colors.primary};
  border-radius: ${props => props.borderRadius || '0px'};
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
/******************************/
const StyledTitle = styled.View`
  width: 75%;
  height: 100%;
  flex-direction: row;
  margin-left: auto;
`;
const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.color || colors.primary};
`;
const StyledRightIconContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS == 'android' ? hp('0.2%') : hp('0%')}px;
  padding-bottom: ${Platform.OS == 'android' ? hp('4.8%') : hp('2.5%')}px;
  padding-right: ${wp('6%')}px;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledHeadingTextWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const StyledLeftIconContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${Platform.OS == 'android' ? hp('0.5%') : hp('0.3%')}px;
  padding-left: ${Platform.OS == 'ios' ? wp('5%') : wp('4%')}px;
  padding-bottom: ${Platform.OS == 'android' ? hp('4.8%') : hp('2.5%')}px;
`;
const StyledLeftIconsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;
const StyledIconWrapper = styled.View`
  padding-top: ${props => props.paddingTop || hp('0%')}px;
`;
const Dashboard = ({navigation: {navigate}, dashboardNumber = 0}) => {
  return (
    <Fragment>
      <StyledHeaderStatus />
      <StyledWrapper>
        <StyledStatusBar barStyle="light-content" />
        <StyledContainer>
          <StyledHeader>
            <StyledLeftIconContainer>
              <StyledLeftIconsWrapper>
                <StyledIconWrapper
                  paddingTop={Platform.OS == 'ios' ? hp('0.5%') : hp('0.8%')}
                  marginRight={wp('2.5%')}>
                  <Image
                    imageUrl={images.drawer}
                    imageWidth={5}
                    imageHeight={Platform.OS == 'android' ? 1.5 : 1}
                  />
                </StyledIconWrapper>

                <Image
                  imageUrl={images.notification}
                  imageWidth={Platform.OS == 'ios' ? 5 : 5.5}
                  imageHeight={Platform.OS == 'ios' ? 2.5 : 3.5}
                />
              </StyledLeftIconsWrapper>
              {dashboardNumber !== 0 && (
                <StyledLeftIconsWrapper>
                  <Image
                    imageUrl={images.backWardIcon}
                    imageWidth={Platform.OS == 'android' ? 10 : 10}
                    imageHeight={Platform.OS == 'android' ? 3 : 2.5}
                  />
                </StyledLeftIconsWrapper>
              )}
            </StyledLeftIconContainer>
            <StyledTitle>
              <StyledView width="70%">
                <StyledText fontWeight="bold" fontSize={wp('6%')}>
                  Hello Biobele,
                </StyledText>
                <StyledText
                  width="100%"
                  fontSize={wp('3.5%')}
                  marginTop={hp('0.5%')}>
                  Account ID: 1098999765
                </StyledText>
                <StyledText
                  fontSize={wp('2.5%')}
                  marginTop={Platform.OS == 'ios' ? hp('3%') : hp('4%')}>
                  Financial overview
                </StyledText>
                <StyledText
                  fontSize={wp('3.5%')}
                  marginTop={Platform.OS == 'ios' ? hp('3%') : hp('4%')}>
                  Overall balance
                </StyledText>
                <StyledHeadingTextWrapper>
                  <StyledIconWrapper
                    paddingTop={Platform.OS == 'ios' ? hp('0.8%') : hp('1.2%')}>
                    <CustomIcon
                      name="NairaIcon"
                      size={18}
                      color={colors.white}
                    />
                  </StyledIconWrapper>
                  <StyledText
                    width="70%"
                    fontSize={wp('6%')}
                    fontWeight="bold"
                    textAlign="left"
                    marginTop={0}>
                    25,000,000
                  </StyledText>
                </StyledHeadingTextWrapper>
              </StyledView>
              <StyledView width="30%" background="blue">
                <StyledRightIconContainer>
                  <CustomIcon name="logo" size={35} color={colors.white} />
                  <Image
                    imageUrl={images.swipeImage}
                    imageWidth={Platform.OS == 'android' ? 10 : 10}
                    imageHeight={Platform.OS == 'android' ? 3 : 2.5}
                  />
                </StyledRightIconContainer>
              </StyledView>
            </StyledTitle>
          </StyledHeader>
          <StyledBody>
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
                <StyledButton
                  backgroundColor={colors.buttonColor}
                  borderRadius="20px"
                  width="40px"
                  height="40px">
                  <StyledImage source={images.plusIcon} />
                </StyledButton>
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
          </StyledBody>
        </StyledContainer>
      </StyledWrapper>
    </Fragment>
  );
};

export default Dashboard;
