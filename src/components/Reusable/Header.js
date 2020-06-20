import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Text from '../../components/Reusable/Text';
import Image from '../../components/Reusable/Image';

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: ${hp('1%')}px ${wp('6%')}px;
  margin-bottom: ${hp('3%')}px;
  position: relative;
`;

const StyledTradeImage = styled.Image`
  width: 8px;
  height: 8px;
  position: absolute;
  top: ${Platform.OS === 'android' ? '22px' : '25px'};
  left: ${Platform.OS === 'android' ? '175px' : '180px'};
`;
const Header = () => {
  return (
    <StyledHeader>
      <Image
        imageUrl={images.parentBean}
        imageWidth={Platform.OS === 'android' ? 7 : 9}
        imageHeight={4}
        marginRight={wp('3%')}
      />
      <Text color={colors.primary} fontSize={wp('5.9%')}>
        earlybean
      </Text>
      <StyledTradeImage source={images.tradeMarkParent} />
    </StyledHeader>
  );
};

export default Header;
