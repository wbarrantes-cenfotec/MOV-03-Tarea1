/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/components/screens/HomeScreen';
import DetailScreen from './src/components/screens/DetailScreen';
import { Scene, Router } from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={HomeScreen}
            title="All the albums..."
            initial={true}
          />
          <Scene
            key="detail"
            component={DetailScreen}
            title="Album details"
          />
        </Scene>
      </Router>
  );
};

export default App;
