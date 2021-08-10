/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {LogBox, StatusBar, StyleSheet, View} from 'react-native';
import dimensions from './src/constants/dimensions';
import ListSongScreen from './src/screens/ListSongScreen/ListSongScreen';

const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ListSongScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: dimensions.statusbarH,
  },
});

export default App;
