import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen.tsx/HomeScreen';
import ListSongScreen from '../screens/ListSongScreen/ListSongScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListSongScreen" component={ListSongScreen} />
      {/* <Stack.Screen name="Test2" component={CurrentSong} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
