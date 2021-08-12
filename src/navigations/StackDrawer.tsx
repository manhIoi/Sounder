import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.tsx/HomeScreen';
import ListSongScreen from '../screens/ListSongScreen/ListSongScreen';
import CurrentSong from '../screens/CurrentSong/CurrentSong';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const StackDrawer = ({isOpen}: {isOpen: boolean}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const borderRadiusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(scaleAnim, {
        toValue: 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(borderRadiusAnim, {
        toValue: 20,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(borderRadiusAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  return (
    <Animated.View
      style={{
        flex: 1,
        borderRadius: borderRadiusAnim,
        overflow: 'hidden',
        transform: [
          {
            scale: scaleAnim,
          },
        ],
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Test1" component={ListSongScreen} />
        <Stack.Screen name="Test2" component={CurrentSong} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default StackDrawer;
