import React from 'react';
import {Platform} from 'react-native';
import {images} from '../../core';
import ParentWelcomeScreen from '../../components/Reusable/ParentWelcomeScreen';

const ParentAuthScreenOne = ({navigation: {navigate}}) => {
  return (
    <ParentWelcomeScreen
      introTextOne=" Welcome to earlybean"
      introTextTwo="The family savings app that grows your money and teaches your kids to be money-smart."
      imageUrl={images.pregMom}
      imageHeight={35}
      imageWidth={Platform.OS === 'android' ? 48 : 63}
      handlePress={() => navigate('ParentAuthScreenTwo')}
      screenNumber={1}
    />
  );
};

export default ParentAuthScreenOne;
