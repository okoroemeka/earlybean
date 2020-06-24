import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store/index';

import React from 'react';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
