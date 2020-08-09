import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../core';
import View from '../UI/View';
import Text from '../UI/TextRemade';
import CustomIcon from '../../core/CustomIcon';

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${hp('7%')}px;
  background-color: ${colors.primary};
`;
const StyledTouchable = styled.TouchableOpacity`
  padding-left: ${wp('3%')}px;
`;
const StyledView = styled.View`
  margin-left: auto;
  padding-right: ${wp('3%')}px;
`;
const AddChildCard = ({cardTitle, handleGoback}) => {
  return (
    <StyledHeader>
      <View height="auto" width="30%">
        <Text fontSize={wp('3%')}>Back</Text>
        <StyledTouchable onPress={handleGoback}>
          <CustomIcon name="backIcon" size={8} color={colors.white} />
        </StyledTouchable>
      </View>
      <View height="auto" width="40%">
        <Text fontSize={wp('3%')} marginTop={hp('1.6%')}>
          {cardTitle}
        </Text>
      </View>
      <View height="auto" width="30%">
        <StyledView>
          <CustomIcon name="logo" size={30} color={colors.white} />
        </StyledView>
      </View>
    </StyledHeader>
  );
};

export default AddChildCard;
