import React from 'react';
import {images} from '../../core';

import ChildWelcomeScreen from '../../components/Reusable/ChildWelcomeScreen';

const WelcomeScreenOne = ({navigation: {navigate}}) => {
  return (
    <ChildWelcomeScreen
      backgroundImage={images.childWelcomeScreenOne}
      welcomeTextOne="Welcome to"
      welcomeTexttwo="earlybean"
      welcomeTextThree="A digital piggybank where you can earn, save and control your money."
      screenNumber={1}
      onPressHandler={() => navigate('WelcomeScreenTwo')}
    />
  );
};

export default WelcomeScreenOne;
