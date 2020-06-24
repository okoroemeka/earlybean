import React from 'react';
import {Platform} from 'react-native';
import {images} from '../../core';
import ParentWelcomeScreen from '../../components/Reusable/ParentWelcomeScreen';

const ParentAuthScreenFour = ({navigation: {navigate}}) => {
  return (
    <ParentWelcomeScreen
      introTextOne="Raise money-smart kids and independent adults."
      introTextTwo="Set long-term savings plans for your kids, that can only be touched on your terms."
      imageUrl={images.fourthAuthImage}
      imageHeight={Platform.OS === 'android' ? 37 : 30}
      imageWidth={Platform.OS === 'android' ? 62 : 70}
      handlePress={() => navigate('SignUpScreen')}
      screenNumber={4}
    />
  );
};

export default ParentAuthScreenFour;
