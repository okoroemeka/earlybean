import React from 'react';
import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CustomIcon from '../../core/CustomIcon';
import {colors} from '../../core';
import TextRemade from '../../components/UI/TextRemade';

const StyledTouchable = styled.TouchableOpacity`
  flex-direction: column;
`;
const BackIcon = ({handleBackButtonPress}) => {
  return (
    <StyledTouchable onPress={handleBackButtonPress}>
      <TextRemade width="auto" fontSize={wp('3%')}>
        Back
      </TextRemade>
      <CustomIcon name="backIcon" color={colors.white} size={5} />
    </StyledTouchable>
  );
};

export default BackIcon;
