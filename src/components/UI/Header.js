import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, images} from '../../core';
import Text from './Text';
import Image from './Image';

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'flex-start'};
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
  left: ${props => props.leftPositon || '185px'};
`;
const Header = ({
  logoUrl,
  logoHeight,
  logoWidth,
  tradeMarkUrl,
  textColor,
  headerHeight,
  topPosition,
  leftPositon,
  justifyContent,
}) => {
  return (
    <StyledHeader height={headerHeight} justifyContent={justifyContent}>
      <Image
        imageUrl={logoUrl || images.parentBean}
        imageWidth={logoWidth || Platform.OS === 'android' ? 7 : 9}
        imageHeight={logoHeight || 4}
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
