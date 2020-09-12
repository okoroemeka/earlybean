import React, {useState, useReducer, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import {colors, images} from '../../core';
import TextRemade from '../../components/UI/TextRemade';
import ImageRemade from '../../components/UI/ImageRemade';
import ViewHelper from '../../components/UI/View';
import mockData from '../../../data/mockData';
import Reducers from '../../../utils/Reducers';

const StyledImageCardWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('2%')}px;
`;
const StyledImageWrapper = styled.View`
  width: ${props => (props.active ? '65px' : '60px')};
  height: ${props => (props.active ? '65px' : '60px')};
  justify-content: center;
  align-items: center;
  border-radius: ${props => (props.active ? '35px' : '30px')};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  position: relative;
`;

const StyledImageSubWrapper = styled.TouchableOpacity`
  width: ${props => (props.active ? '55px' : '50px')};
  height: ${props => (props.active ? '55px' : '50px')};
  border-radius: ${props => (props.active ? '27px' : '25px')};
  overflow: hidden;
`;

const {createTrust} = Reducers;
const {initialChildrenState} = mockData;

const SelectChild = ({
  childrenData = initialChildrenState,
  getSelectedChild,
}) => {
  const [childrenState, dispatchChildren] = useReducer(
    createTrust(),
    childrenData,
  );

  const [chosenChild, setChosenChild] = useState('');

  const handleSelectChild = data => {
    setChosenChild(data.payload.childName);
    return dispatchChildren(data);
  };

  useEffect(() => {
    if (getSelectedChild) {
      getSelectedChild(chosenChild);
    }
  }, [getSelectedChild, chosenChild]);

  return (
    <StyledImageCardWrapper>
      {childrenState.map(({imageUrl, childName, active, id}, index) => (
        <ViewHelper width="auto" height="auto" key={index}>
          <StyledImageWrapper active={active}>
            <StyledImageSubWrapper
              active={active}
              onPress={() =>
                handleSelectChild({
                  type: 'selectChild',
                  payload: {id: id, childName},
                })
              }>
              <ImageRemade imageUrl={imageUrl} resizeMode="cover" />
            </StyledImageSubWrapper>
            {active && (
              <ViewHelper
                width={'22px'}
                height={'22px'}
                position="absolute"
                top={0}
                right={0}
                padding={5}
                backgroundColor={colors.primary}
                alignItems="center"
                justifyContent="center"
                borderRadius={10}>
                <ImageRemade
                  imageUrl={images.tick}
                  imageWidth={'13px'}
                  imageHeight={'13px'}
                />
              </ViewHelper>
            )}
          </StyledImageWrapper>
          <TextRemade
            width="auto"
            fontSize={wp('3.5%')}
            marginTop={hp('0.3%')}
            textAlign="center"
            paddingLeftAndRight={wp('0%')}
            color={colors.placeholderColor}>
            {childName}
          </TextRemade>
        </ViewHelper>
      ))}
    </StyledImageCardWrapper>
  );
};

export default SelectChild;
