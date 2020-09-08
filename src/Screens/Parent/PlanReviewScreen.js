import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import CardWrapperWithHeader from '../../components/Reusable/CardWrapperWithHeader';
import Button from '../../components/UI/Button';
import View from '../../components/UI/View';
import Line from '../../components/UI/Line';
import Image from '../../components/UI/Image';

const StyledCardWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 ${wp('2.5%')}px;
  margin-top: ${props => props.marginTop || hp('4%')}px;
`;

const StyledImageContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS == 'android' ? hp('0.4%') : hp('0.25')}px;
  padding-right: ${Platform.OS == 'ios' ? wp('8%') : wp('6%')}px;
  align-items: flex-end;
`;
const ReviewPlan = ({navigation, route}) => {
  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="Review">
      <StyledCardWrapper>
        <View height="auto">
          <TextRemade textAlign="left" color={colors.black} fontSize={wp('6%')}>
            Let's review!
          </TextRemade>
          <TextRemade textAlign="left" color={colors.black} fontSize={wp('3%')}>
            Before we finalise, lets do a quick review.
          </TextRemade>
        </View>
        <View
          height="auto"
          marginTop={`${hp('2%')}`}
          marginBottom={`${hp('1%')}`}>
          <TextRemade
            textAlign="left"
            color={colors.black}
            fontSize={wp('4%')}
            textTransform="capitalize">
            New car
          </TextRemade>
        </View>
        <Line borderColor={colors.buttonColor} />

        <View
          height="auto"
          marginTop={`${hp('3%')}`}
          marginBottom={`${hp('3%')}`}
          flexDirection="row">
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              Total Goal
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              textTransform="uppercase"
              color={colors.black}
              textAlign="left">
              N1,500,000
            </TextRemade>
          </View>
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              Amount to save now
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              textTransform="uppercase"
              color={colors.black}
              textAlign="left">
              N20,000
            </TextRemade>
          </View>
        </View>
        <Line borderColor={colors.buttonColor} />
        <View
          height="auto"
          marginTop={`${hp('3%')}`}
          marginBottom={`${hp('3%')}`}
          flexDirection="row">
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              start date
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              color={colors.black}
              textAlign="left">
              may 29th 2020
            </TextRemade>
          </View>
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              maturity date
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              color={colors.black}
              textAlign="left">
              aug 29th 2020
            </TextRemade>
          </View>
        </View>
        <Line borderColor={colors.buttonColor} />
        <View
          height="auto"
          marginTop={`${hp('3%')}`}
          marginBottom={`${hp('3%')}`}
          flexDirection="row">
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              how often
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              textTransform="capitalize"
              color={colors.black}
              textAlign="left">
              Daily
            </TextRemade>
          </View>
          <View width="50%" height="auto">
            <TextRemade
              textTransform="uppercase"
              color={colors.placeholderColor}
              textAlign="left"
              fontSize={wp('2.5%')}>
              interest rate
            </TextRemade>
            <TextRemade
              marginTop={hp('0.7%')}
              color={colors.black}
              textAlign="left">
              6.5% per annum
            </TextRemade>
          </View>
        </View>
        <Line borderColor={colors.buttonColor} />
        <View
          marginTop={`${hp('7%')}`}
          marginBottom={`${hp('3%')}`}
          alignItems="center">
          <Button
            handlePress={() => navigation.navigate('PlanReviewScreen')}
            width={Platform.OS == 'ios' ? '38%' : '37%'}
            paddingTopBottom={
              Platform.OS == 'android' ? hp('1.6%') : hp('1.3%')
            }
            borderRadius="8px"
            flexDirection="row">
            <TextRemade
              textAlign="right"
              fontSize={wp('3.3%')}
              width="50%"
              maxWidth="50%">
              Save
            </TextRemade>
            <StyledImageContainer>
              <Image
                imageUrl={images.nextIcon}
                imageWidth={Platform.OS == 'ios' ? wp('1.3%') : wp('1.7%')}
                imageHeight={Platform.OS == 'ios' ? hp('0.14%') : hp('0.3%')}
              />
            </StyledImageContainer>
          </Button>
        </View>
      </StyledCardWrapper>
    </CardWrapperWithHeader>
  );
};

export default ReviewPlan;
