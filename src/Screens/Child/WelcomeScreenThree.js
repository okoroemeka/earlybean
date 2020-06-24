import React from 'react';
import {images} from '../../core';

import ChildWelcomeScreen from '../../components/Reusable/ChildWelcomeScreen';

const WelcomeScreenThree = ({navigation: {navigate}}) => {
  return (
    <ChildWelcomeScreen
      backgroundImage={images.childWelcomeScreenThree}
      welcomeTextOne="Earn and trade"
      welcomeTexttwo="digital coins."
      screenNumber={3}
      onPressHandler={() => navigate('LoginScreen')}
    />
  );
};

export default WelcomeScreenThree;
