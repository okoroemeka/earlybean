import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors, images} from '../core';

const StyledWrapper = styled.View`
  flex: 1;
  background-color: ${colors.purpleSplash};
  justify-content: center;
  align-items: center;
`;
const StyledImageContainer = styled.View`
  height: 80%;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.Image`
  width: 105px;
  height: 100px;
`;
const StyledTradeImage = styled.Image`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 18px;
  right: 110px;
`;
const StyledButtonContainer = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledTochable = styled.TouchableOpacity`
  margin: 0 ${wp('2%')}px;
  padding: ${hp('1%')}px ${wp('12%')}px;
  background-color: ${colors.white};
  border: 1px solid ${props => props.borderColor || colors.primary};
  border-radius: 5px;
`;
const StyledText = styled.Text`
  width: 100%;
  margin: ${props => props.margin || 0};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || colors.white};
  font-size: ${props => props.fontSize || wp('4%')}px;
  font-family: 'LucidaGrande';
`;
const StyledContainer = styled.View`
  flex-direction: row;
  width: auto;
  position: relative;
`;
const WelcomeScreen = ({navigation: {navigate}}) => {
  return (
    <StyledWrapper>
      <StyledImageContainer>
        <StyledImage source={images.bean} />
        <StyledContainer>
          <StyledText color={colors.white} fontSize={wp('9.9%')}>
            ealybean
          </StyledText>
          <StyledTradeImage source={images.tradeMark} />
        </StyledContainer>
      </StyledImageContainer>

      <StyledButtonContainer>
        <StyledTochable onPress={() => navigate('ParentAuthScreen')}>
          <StyledText
            color={colors.primary}
            fontSize={wp('4.5%')}
            margin="auto">
            Adult
          </StyledText>
        </StyledTochable>
        <StyledTochable
          borderColor={colors.wineRed}
          onPress={() => navigate('ChildNavigation')}>
          <StyledText
            color={colors.wineRed}
            fontSize={wp('4.5%')}
            margin="auto">
            Child
          </StyledText>
        </StyledTochable>
      </StyledButtonContainer>
    </StyledWrapper>
  );
};
export default WelcomeScreen;
