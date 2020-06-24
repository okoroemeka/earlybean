import React from 'react';
import {Platform} from 'react-native';
import {images} from '../../core';
import ParentWelcomeScreen from '../../components/Reusable/ParentWelcomeScreen';

const ParentAuthScreenThree = ({navigation: {navigate}}) => {
  return (
    <ParentWelcomeScreen
      introTextOne="Secure your kids future, by starting a trust fund early."
      introTextTwo="Set long-term savings plans for your kids, that can only be touched on your terms."
      imageUrl={images.thirdAuthImage}
      imageHeight={Platform.OS === 'android' ? 45 : 35}
      imageWidth={Platform.OS === 'android' ? 85 : 80}
      handlePress={() => navigate('ParentAuthScreenFour')}
      screenNumber={3}
    />
  );
};

export default ParentAuthScreenThree;
