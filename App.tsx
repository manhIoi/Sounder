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
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from './src/navigations/MainDrawer';
import {useSelector} from 'react-redux';
import Root from './src/navigations/Root';
import MyAlert from './src/components/MyAlert';
import {RootState} from './src/redux/reducers';

const App = () => {
  LogBox.ignoreAllLogs();
  const alert = useSelector((state: RootState) => state.alertReducer);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <MyAlert />
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
