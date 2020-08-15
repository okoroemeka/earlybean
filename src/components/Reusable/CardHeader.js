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
  background-color: ${props => props.backgroundColor || colors.primary};
`;
const StyledTouchable = styled.TouchableOpacity`
  padding-left: ${wp('3%')}px;
`;
const StyledView = styled.View`
  margin-left: auto;
  padding-right: ${wp('3%')}px;
`;
const AddChildCard = ({
  cardTitle = '',
  handleGoback = () => null,
  fontSize,
  backTextColor,
  backIconColor,
  cardTitleColor,
  logoColor,
  backgroundColor,
}) => {
  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <View height="auto" width="30%">
        <Text fontSize={wp('3%')} color={backTextColor}>
          Back
        </Text>
        <StyledTouchable onPress={handleGoback}>
          <CustomIcon
            name="backIcon"
            size={8}
            color={backIconColor || colors.white}
          />
        </StyledTouchable>
      </View>
      <View height="auto" width="40%">
        <Text
          fontSize={fontSize || wp('3%')}
          marginTop={hp('1.6%')}
          color={cardTitleColor}>
          {cardTitle}
        </Text>
      </View>
      <View height="auto" width="30%">
        <StyledView>
          <CustomIcon name="logo" size={30} color={logoColor || colors.white} />
        </StyledView>
      </View>
    </StyledHeader>
  );
};

export default AddChildCard;
