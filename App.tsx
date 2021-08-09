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
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import rootColor from './src/constants/colors';
import dimensions from './src/constants/dimensions';
import {rootFonts} from './src/constants/fonts';
import HomeScreen from './src/screens/HomeScreen.tsx/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: dimensions.statusbarH,
  },
});

export default App;
