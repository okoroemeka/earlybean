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
  justify-content: flex-end;
  width: 100%;
  height: ${props => props.height || '10%'};
  padding: ${hp('1%')}px ${wp('6%')}px;
  margin-bottom: ${hp('3%')}px;
  position: relative;
`;

const StyledTradeImage = styled.Image`
  width: 8px;
  height: 8px;
  position: absolute;
  top: ${props => props.topPosition || '22px'};
  right: ${props => props.leftPositon || '0px'};
`;
const Header = ({
  logoUrl,
  tradeMarkUrl,
  textColor,
  headerHeight,
  topPosition,
  leftPositon,
}) => {
  return (
    <StyledHeader height={headerHeight}>
      <Image
        imageUrl={logoUrl || images.parentBean}
        imageWidth={Platform.OS === 'android' ? 7 : 9}
        imageHeight={4}
        marginRight={wp('3%')}
      />
      <Text color={textColor || colors.black} fontSize={wp('5.9%')}>
        earlybean
      </Text>
      <StyledTradeImage
        source={tradeMarkUrl || images.tradeMarkParent}
        topPosition={topPosition}
        leftPositon={leftPositon}
      />
    </StyledHeader>
  );
};

export default Header;
