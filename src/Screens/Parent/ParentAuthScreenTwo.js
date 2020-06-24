import React from 'react';
import {Platform} from 'react-native';
import {images} from '../../core';
import ParentWelcomeScreen from '../../components/Reusable/ParentWelcomeScreen';

const ParentAuthScreenTwo = ({navigation: {navigate}}) => {
  return (
    <ParentWelcomeScreen
      introTextOne="Save and grow your income by as much as 15% annually."
      introTextTwo="Set aside a portion of your income and earn interests on your savings."
      imageUrl={images.secondAuthImage}
      imageHeight={Platform.OS === 'android' ? 35 : 25}
      imageWidth={Platform.OS === 'android' ? 85 : 80}
      handlePress={() => navigate('ParentAuthScreenThree')}
      screenNumber={2}
    />
  );
};

export default ParentAuthScreenTwo;
