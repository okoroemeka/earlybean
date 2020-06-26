import 'react-native-gesture-handler';

import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './utils/apollo/client';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
