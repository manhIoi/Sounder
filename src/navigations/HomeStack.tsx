import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-animatable';
import PlayerWidget from '../components/PlayerWidget';
import {spacing} from '../constants/dimensions';
import CurrentSongScreen from '../screens/CurrentSongScreen/CurrentSongScreen';
import HomeScreen from '../screens/HomeScreen.tsx/HomeScreen';
import ListSongScreen from '../screens/ListSongScreen/ListSongScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <View style={{flex: 1}}>
      <PlayerWidget />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListSongScreen" component={ListSongScreen} />
        <Stack.Screen
          name="CurrentSongScreen"
          component={CurrentSongScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeStack;
