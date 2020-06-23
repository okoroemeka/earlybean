import React from 'react';
import {images} from '../../core';
import ChildWelcomeScreen from '../../components/Reusable/ChildWelcomeScreen';

const WelcomeScreenTwo = ({navigation: {navigate}}) => {
  return (
    <ChildWelcomeScreen
      backgroundImage={images.childWelcomeScreenTwo}
      welcomeTextOne="Earn and save real"
      welcomeTexttwo="money"
      screenNumber={2}
      onPressHandler={() => navigate('LoginScreen')}
    />
  );
};

export default WelcomeScreenTwo;
