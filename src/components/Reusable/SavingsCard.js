import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '../../core';
import TextRemade from '../UI/TextRemade';
import Button from '../UI/Button';
import InfoCard from '../UI/InfoCard';
import CustomIcon from '../../core/CustomIcon';

const StyledView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  padding-top: ${props => props.paddingTop || hp('0%')}px;
  padding-left: ${props => props.paddingLeft || wp('0%')}px;
  margin-top: ${props => props.marginTop || hp('0%')}px;
  position: ${props => props.position || 'relative'};
`;

const StyledTouchable = styled.TouchableOpacity``;

const StyledEditIconWrapper = styled.View`
  width: auto;
  height: auto;
  position: absolute;
  top: ${hp('1%')}px;
  right: ${wp('1%')}px;
`;

const StyledLineView = styled.View`
  width: ${props => props.width || '100%'};
  height: ${Platform.OS == 'ios' ? hp('0.8%') : hp('1.1%')}px;
  background: ${props => props.backgroundColor || colors.placeholderColor};
  border-radius: 5px;
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || hp('0%')}px;
  left: ${props => props.left || wp('0%')}px;
`;

const SavingsCard = ({
  isNotInterestRate = false,
  isEditIcon,
  purpose,
  amount,
  completionRate,
  constribution,
  deadLine,
  interestRate,
  handlePress = () => null,
}) => {
  let completionColor = colors.placeholderColor;
  const formatedCompletionRate = Number(completionRate.replace(/%/g, ''));

  if (formatedCompletionRate === 100) {
    completionColor = colors.primary;
  } else if (formatedCompletionRate >= 20 && formatedCompletionRate < 100) {
    completionColor = colors.brandBlue;
  } else {
    completionColor = colors.brandYellow;
  }

  return (
    <StyledTouchable onPress={handlePress}>
      <InfoCard
        width={wp('90%')}
        height={hp(Platform.OS == 'ios' ? '18%' : '23%')}
        borderRadius="12px"
        flexDirection="row"
        paddingTopDown={hp('1.5%')}
        paddingLeftRight={wp('4%')}
        justifyContent="flex-start">
        <StyledView>
          <StyledView height="auto">
            <StyledView height="auto" width="80%">
              <TextRemade
                width="auto"
                color={colors.primary}
                textAlign="left"
                fontWeight="bold"
                fontSize={wp('5%')}>
                {purpose}
              </TextRemade>
              {formatedCompletionRate < 100 && !isNotInterestRate && (
                <StyledView
                  width="auto"
                  paddingTop={Platform.OS == 'ios' ? hp('1%') : hp('1.4%')}
                  paddingLeft={wp('2%')}>
                  <CustomIcon name="lock" color={colors.greenBrand} />
                </StyledView>
              )}
            </StyledView>
            {isEditIcon && (
              <StyledEditIconWrapper>
                <StyledTouchable>
                  <CustomIcon
                    name="editIcon"
                    size={12}
                    color={colors.placeholderColor}
                  />
                </StyledTouchable>
              </StyledEditIconWrapper>
            )}
          </StyledView>
          <StyledView height="auto" marginTop={hp('2.5%')}>
            <StyledView>
              <TextRemade
                width="auto"
                color={colors.placeholderColor}
                textAlign="left"
                fontSize={wp('3%')}>
                Goal
              </TextRemade>
              <StyledView width="auto" paddingLeft={wp('2%')}>
                <TextRemade
                  width="auto"
                  color={colors.placeholderColor}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  {amount}
                </TextRemade>
              </StyledView>
              <StyledView width="auto" marginLeft="auto">
                <TextRemade
                  width="auto"
                  color={colors.placeholderColor}
                  textAlign="left"
                  fontSize={wp('3%')}>
                  {completionRate}
                </TextRemade>
                <StyledView width="auto" paddingLeft={wp('2%')}>
                  <TextRemade
                    width="auto"
                    color={colors.placeholderColor}
                    textAlign="left"
                    fontSize={wp('3%')}>
                    {constribution}
                  </TextRemade>
                </StyledView>
              </StyledView>
            </StyledView>
          </StyledView>
          <StyledLineView marginTop={hp('0.5%')}>
            <StyledLineView
              position="absolute"
              width={completionRate}
              backgroundColor={completionColor}
            />
          </StyledLineView>
          <StyledView height="auto" marginTop={hp('1.5%')}>
            <StyledView>
              <TextRemade
                width="auto"
                color={colors.black}
                marginTop={hp('0.5%')}
                textAlign="left"
                fontSize={wp('3%')}>
                {deadLine}
              </TextRemade>
              <StyledView width="auto" marginLeft="auto" alignItems="flex-end">
                <StyledView width="auto">
                  <Button
                    backgroundColor={colors.white}
                    borderRadius="15px"
                    borderColor={colors.primary}
                    paddingTopBottom={
                      Platform.OS == 'ios' ? hp('0.6%') : hp('0.9%')
                    }
                    paddingLeftRight={wp('3.5%')}
                    borderWidth="1px">
                    <TextRemade
                      width="auto"
                      textAlign="left"
                      color={colors.primary}
                      fontSize={wp('3%')}>
                      End goal
                    </TextRemade>
                  </Button>
                </StyledView>
              </StyledView>
              {formatedCompletionRate !== 100 && !isNotInterestRate && (
                <StyledView
                  width="auto"
                  paddingLeft={wp('2%')}
                  flexDirection="column">
                  <TextRemade
                    width="auto"
                    color={colors.greenBrand}
                    textAlign="left"
                    fontSize={wp('2.8%')}>
                    {interestRate}
                  </TextRemade>
                  <TextRemade
                    width="auto"
                    color={colors.placeholderColor}
                    textAlign="left"
                    fontSize={wp('2.7%')}>
                    interest p.a
                  </TextRemade>
                </StyledView>
              )}
            </StyledView>
          </StyledView>
        </StyledView>
      </InfoCard>
    </StyledTouchable>
  );
};

export default SavingsCard;
