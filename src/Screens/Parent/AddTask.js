import React, {useState, Fragment} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, images} from '../../core';
import CardHeader from '../../components/Reusable/CardHeader';
import View from '../../components/UI/View';
import Text from '../../components/UI/TextRemade';
import Line from '../../components/UI/Line';
import CustomIcon from '../../core/CustomIcon';
import ImageRemade from '../../components/UI/ImageRemade';
import HeaderStatus from '../../components/Reusable/HeaderStatus';

const StyledWrapper = styled.ScrollView`
  width: 100%;
  background-color: ${colors.white};
`;
const StyledCardWrapper = styled.SafeAreaView`
  width: 100%;
  background-color: ${colors.white};
`;
const StyledCardBody = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: ${wp('3%')}px;
`;
const StyledTouchable = styled.TouchableOpacity``;
const StyledDot = styled.View`
  width: 20px;
  height: 20px;
  margin-right: ${wp('2%')}px;
  border-radius: 10px;
  background-color: ${colors.buttonColor};
`;
const StyledView = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
const AddTask = props => {
  return (
    <Fragment>
      <HeaderStatus />
      <StyledWrapper>
        <StyledCardWrapper>
          <CardHeader
            cardTitle="Add a new task"
            handleGoback={() => props.navigation.goBack()}
          />
          <StyledCardBody height="auto">
            <View height="auto" width="85%">
              <Text
                color={colors.placeholderColor}
                textAlign="left"
                fontSize={Platform.OS == 'ios' ? wp('3%') : wp('3.1%')}>
                Below are a bunch of tasks that parents like yourself assign
                their kids. You can either choose from the list, or add your own
                task. Tasks with this sign show tasks that are usually rewarded
                using beancoins
              </Text>
              <View height="auto" marginTop={hp('2%')} marginBottom={hp('2%')}>
                <StyledTouchable
                  onPress={() => props.navigation.navigate('NewTaskScreen')}>
                  <Text
                    width="auto"
                    color={colors.placeholderColor}
                    textAlign="left">
                    Add my own task
                  </Text>
                </StyledTouchable>
                <Line borderColor={colors.primary} />
              </View>
              <View height="auto">
                <View flexDirection="row" height="auto">
                  <Text
                    width="50%"
                    textAlign="left"
                    color={colors.placeholderColor}
                    fontSize={wp('3%')}>
                    Popular task
                  </Text>
                  <Text
                    width="50%"
                    textAlign="right"
                    color={colors.placeholderColor}
                    fontSize={wp('3%')}>
                    Average paid
                  </Text>
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Clean up toys
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        100
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Clean up my room
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        300
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Wash dishes
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Make my bed
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        200
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Wash moms car
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        500
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Wash dads car
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        300
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Feed the pets
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                      <ImageRemade
                        imageUrl={images.beanCoin}
                        imageWidth={`${wp('4%')}px`}
                        imageHeight={`${wp('3.5%')}px`}
                      />
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      walk the dog
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        200
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
                <View
                  height="auto"
                  marginTop={hp('1.5%')}
                  marginBottom={hp('1.5%')}>
                  <View
                    flexDirection="row"
                    height="auto"
                    alignItems="center"
                    marginBottom={hp('1%')}>
                    <StyledDot />
                    <Text
                      width="auto"
                      color={colors.placeholderColor}
                      fontSize={wp('3%')}>
                      Read daily
                    </Text>
                    <StyledView
                      width="auto"
                      flexDirection="row"
                      height="auto"
                      alignItems="center">
                      <CustomIcon
                        name="NairaIcon"
                        color={colors.ashBlack}
                        size={10}
                      />
                      <Text
                        width="auto"
                        color={colors.placeholderColor}
                        fontSize={wp('3%')}>
                        200
                      </Text>
                    </StyledView>
                  </View>
                  <Line borderColor={colors.placeholderColor} />
                </View>
              </View>
            </View>
          </StyledCardBody>
        </StyledCardWrapper>
      </StyledWrapper>
    </Fragment>
  );
};

export default AddTask;
