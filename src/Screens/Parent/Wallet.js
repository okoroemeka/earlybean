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
import Button from '../../components/UI/Button';
import ImageRemade from '../../components/UI/ImageRemade';

const StyledBody = styled.ScrollView`
  width: 100%;
  padding-top: ${hp('2.5%')}px;
  padding-left: ${wp('2.5%')}px;
  padding-bottom: ${hp('6%')}px;
  padding-right: ${hp('2.5%')}px;
`;

const StyledBox = styled.View`
  width: ${props => props.width || wp('3%')}px;
  height: ${props => props.height || hp('2%')}px;
  border: 1px solid ${colors.primary};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  background: ${colors.white};
`;

const Wallet = ({navigation}) => {
  return (
    <CardWrapperWithHeader
      handleGoBack={() => navigation.goBack()}
      paddingBottom={hp('5%')}
      headerText="My wallet">
      <StyledBody>
        <TextRemade
          color={colors.ashBlack}
          fontSize={wp('5%')}
          textAlign="left">
          Welcome to your Wallet!
        </TextRemade>
        <View
          flexDirection="row"
          height="auto"
          justifyContent="space-between"
          marginTop={hp('3%')}>
          <View
            width="47%"
            height={`${hp('12%')}px`}
            justifyContent="center"
            alignItems="center"
            paddingBottom={hp('1%')}
            backgroundColor={colors.primary}
            boxShadow="0px 7px 32px rgba(0, 0, 0, 0.0637566)"
            borderRadius="30px">
            <TextRemade textTransform="uppercase" fontSize={wp('2.5%')}>
              family balance
            </TextRemade>
            <View
              height="auto"
              flexDirection="row"
              alignItems="center"
              marginBottom={hp('1%')}
              justifyContent="center">
              <CustomIcon name="NairaIcon" size={12} color={colors.white} />
              <TextRemade width="auto" fontSize={wp('3.5%')}>
                100,000
              </TextRemade>
            </View>
            <Button
              alignItems="center"
              borderRadius="15px"
              backgroundColor={colors.white}
              paddingLeftRight={wp('1%')}
              paddingTopBottom={hp('0%')}
              width={`${wp('20%')}px`}>
              <TextRemade
                width="auto"
                color={colors.primary}
                fontSize={wp('2%')}>
                fund wallet
              </TextRemade>
            </Button>
          </View>
          <View
            width="47%"
            height={`${hp('12%')}px`}
            justifyContent="center"
            alignItems="center"
            paddingBottom={hp('1%')}
            backgroundColor={colors.primary}
            borderRadius={30}>
            <TextRemade textTransform="uppercase" fontSize={wp('2.5%')}>
              personal balance
            </TextRemade>
            <View
              height="auto"
              flexDirection="row"
              alignItems="center"
              marginBottom={hp('1%')}
              justifyContent="center">
              <CustomIcon name="NairaIcon" size={12} color={colors.white} />
              <TextRemade width="auto" fontSize={wp('3.5%')}>
                100,000
              </TextRemade>
            </View>
            <Button
              alignItems="center"
              borderRadius="15px"
              backgroundColor={colors.white}
              paddingLeftRight={wp('1%')}
              paddingTopBottom={hp('0%')}
              width={`${wp('20%')}px`}>
              <TextRemade
                width="auto"
                color={colors.primary}
                fontSize={wp('2%')}>
                fund wallet
              </TextRemade>
            </Button>
          </View>
        </View>
        <View height="auto" paddingLeft={wp('2%')}>
          <TextRemade
            color={colors.primary}
            textAlign="left"
            marginTop={hp('3%')}>
            Account Details
          </TextRemade>
          <TextRemade
            color={colors.placeholderColor}
            textAlign="left"
            fontSize={wp('3%')}
            marginTop={hp('0.3%')}>
            Use these details to transfer money directly into your Earlybean
            personal wallet
          </TextRemade>
        </View>
        <View
          height="auto"
          paddingLeft={wp('2%')}
          flexDirection="row"
          marginTop={hp('2.6%')}
          paddingRight={wp('4.5%')}>
          <View width="70%" height="auto">
            <TextRemade
              color={colors.ashBlack}
              textAlign="left"
              fontSize={wp('3.4%')}
              fontStyle="italic">
              9915833387 / Providus Bank
            </TextRemade>
            <TextRemade
              color={colors.ashBlack}
              textAlign="left"
              fontSize={wp('3.4%')}
              marginTop={hp('0.3%')}>
              Biobele Oyibo
            </TextRemade>
          </View>
          <View width="30%" height="auto" alignItems="flex-end">
            <StyledBox>
              <StyledBox
                width={wp('3.1%')}
                height={hp('2.5%')}
                position="absolute"
                top={`${hp('0.1%')}px`}
                left={`${hp('0.1%')}px`}
              />
            </StyledBox>
          </View>
        </View>
        <View height="auto" paddingLeft={wp('2%')} paddingTop={hp('4.5%')}>
          <TextRemade
            color={colors.primary}
            textAlign="left"
            marginBottom={hp('1%')}>
            Cards
          </TextRemade>
          <View flexDirection="row" height="auto">
            <TextRemade color={colors.primary} fontSize={wp('3%')} width="auto">
              Add card
            </TextRemade>
            <View
              width={`${wp('8.3%')}px`}
              height={`${hp('2.5%')}px`}
              marginLeft={wp('2%')}>
              <ImageRemade imageUrl={images.card} />
            </View>
          </View>
        </View>
        <View height={`${hp('20%')}px`} marginTop={hp('2%')}>
          <ImageRemade imageUrl={images.debitCard} />
        </View>
        <View height={`${hp('20%')}px`} marginTop={hp('2%')}>
          <ImageRemade imageUrl={images.debitCard1} />
        </View>
        <View
          height="auto"
          flexDirection="row"
          justifyContent="space-between"
          paddingTop={hp('5%')}
          paddingLeft={wp('4%')}
          paddingRight={wp('4%')}>
          <Button
            handlePress={() => navigation.navigate('TransferMoney')}
            alignItems="center"
            borderRadius="20px"
            borderWidth="2px"
            width="45%"
            borderColor={colors.primary}
            backgroundColor={colors.white}
            paddingLeftRight={wp('1%')}
            paddingTopBottom={hp('0%')}>
            <TextRemade
              width="auto"
              color={colors.primary}
              fontSize={wp('3.5%')}>
              Transfer Money
            </TextRemade>
          </Button>
          <Button
            alignItems="center"
            borderRadius="20px"
            borderWidth="2px"
            width="45%"
            borderColor={colors.primary}
            backgroundColor={colors.primary}
            paddingLeftRight={wp('1%')}
            paddingTopBottom={hp('0%')}>
            <TextRemade width="auto" color={colors.white} fontSize={wp('3.5%')}>
              Add Money
            </TextRemade>
          </Button>
        </View>
      </StyledBody>
    </CardWrapperWithHeader>
  );
};

export default Wallet;
