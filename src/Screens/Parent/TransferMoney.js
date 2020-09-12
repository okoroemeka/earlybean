import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import CustomIcon from '../../core/CustomIcon';
import CardWrapperWithHeader from '../../components/Reusable/CardWrapperWithHeader';
import View from '../../components/UI/View';
import ImageRemade from '../../components/UI/ImageRemade';

const StyledBody = styled.View`
  width: 100%;
  padding-top: ${hp('2.5%')}px;
  padding-left: ${wp('2.5%')}px;
  padding-bottom: ${hp('6%')}px;
  padding-right: ${hp('2.5%')}px;
`;

const Styledview = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 ${wp('3%')}px;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
`;

const FundWallet = ({navigation}) => {
  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="My wallet">
      <StyledBody>
        <View width={'70%'} height="auto">
          <TextRemade
            marginTop={hp('2%')}
            textAlign="left"
            color={colors.ashBlack}
            fontSize={wp('5%')}>
            Where would you like to transfer money to?
          </TextRemade>
        </View>
        <View
          height={`${hp('11%')}px`}
          marginTop={hp('4%')}
          marginBottom={hp('2%')}
          borderRadius="20px"
          overFlow="hidden">
          <ImageRemade imageUrl={images.topUPImage} />
          <Styledview onPress={() => navigation.navigate('SavingsPlanScreen')}>
            <View width="80%" height="auto" alignItems="flex-start">
              <TextRemade
                color={colors.primary}
                fontSize={wp('5%')}
                width="auto">
                Savings plan
              </TextRemade>
            </View>
            <View
              width="20%"
              height="auto"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <CustomIcon name="saveicon" color={colors.primary} size={30} />
              <CustomIcon name="Subtract" color={colors.primary} size={8} />
            </View>
          </Styledview>
        </View>
        <View
          height={`${hp('11%')}px`}
          marginTop={hp('2%')}
          marginBottom={hp('2%')}
          borderRadius="20px"
          overFlow="hidden">
          <ImageRemade imageUrl={images.topUPImage} />
          <Styledview onPress={() => navigation.navigate('TransferToBank')}>
            <View width="80%" height="auto" alignItems="flex-start">
              <TextRemade
                color={colors.primary}
                fontSize={wp('5%')}
                width="auto">
                Bank account
              </TextRemade>
            </View>
            <View
              width="20%"
              height="auto"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <CustomIcon name="museum" color={colors.primary} size={30} />
              <CustomIcon name="Subtract" color={colors.primary} size={12} />
            </View>
          </Styledview>
        </View>
        <View
          height={`${hp('11%')}px`}
          marginTop={hp('2%')}
          marginBottom={hp('2%')}
          borderRadius="20px"
          overFlow="hidden">
          <ImageRemade imageUrl={images.topUPImage} />
          <Styledview onPress={() => navigation.navigate('TransferToChildren')}>
            <View width="80%" height="auto" alignItems="flex-start">
              <TextRemade
                color={colors.primary}
                fontSize={wp('5%')}
                width="auto">
                Children’s account
              </TextRemade>
            </View>
            <View
              width="20%"
              height="auto"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <CustomIcon name="kidsIcon" color={colors.primary} size={25} />
              <CustomIcon name="Subtract" color={colors.primary} size={12} />
            </View>
          </Styledview>
        </View>
      </StyledBody>
    </CardWrapperWithHeader>
  );
};

export default FundWallet;
