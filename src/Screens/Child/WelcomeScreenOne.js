import React from 'react';
import {images} from '../../core';

import ChildWelcomeScreen from '../../components/Reusable/ChildWelcomeScreen';

const WelcomeScreenOne = ({navigation: {navigate}}) => {
  return (
    <ChildWelcomeScreen
      backgroundImage={images.childWelcomeScreenOne}
      welcomeTextOne="Welcome to"
      welcomeTexttwo="earlybean"
      welcomeTextThree="A space where kids and teens, like you enjoy some financial independence"
      screenNumber={1}
      onPressHandler={() => navigate('WelcomeScreenTwo')}
    />
  );
};

export default WelcomeScreenOne;
