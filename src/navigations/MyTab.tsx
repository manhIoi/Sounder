import React from 'react';
import {View, Text, Animated} from 'react-native';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.tsx/HomeScreen';
import MyFavoriteScreen from '../screens/MyFavoriteScreen/MyFavoriteScreen';
import HomeStack from './HomeStack';
import dimensions, {bottomTabDimension, spacing} from '../constants/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import rootColor from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {useState} from 'react';
import {useRef} from 'react';

const Tab = createBottomTabNavigator();
const translateX = new Animated.Value(0);
const widthItemBottomTab = bottomTabDimension.w / 2;

const widthActive = widthItemBottomTab / 3;

const MyTab = () => {
  const [isFocused, setIsFocused] = useState(0);

  useEffect(() => {
    Animated.timing(translateX, {
      duration: 300,
      useNativeDriver: true,
      toValue: isFocused ? 1 : 0,
    }).start();
  }, [isFocused]);

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 20,
          width: widthActive,
          left: spacing.normal + (widthItemBottomTab - widthActive) / 2,
          height: 3,
          borderRadius: 10,
          backgroundColor: rootColor.primaryColor,
          zIndex: 1000,
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, bottomTabDimension.w / 2],
              }),
            },
          ],
        }}
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: rootColor.primaryColor,
          tabBarInactiveTintColor: rootColor.grayTextColor,
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            left: (dimensions.w - bottomTabDimension.w) / 2,
            width: bottomTabDimension.w,
            bottom: 20,
            height: bottomTabDimension.h,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          listeners={({navigation, route}) => ({
            focus: e => {
              setIsFocused(0);
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => {
              return <Entypo color={color} name="home" size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="MyFavoriteScreen"
          component={MyFavoriteScreen}
          listeners={({navigation, route}) => ({
            focus: e => {
              setIsFocused(1);
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => {
              return <AntDesign color={color} name="heart" size={30} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyTab;
