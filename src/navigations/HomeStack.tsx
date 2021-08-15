import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {Image} from 'react-native-animatable';
import {useSelector} from 'react-redux';
import PlayerWidget from '../components/PlayerWidget';
import dimensions, {spacing} from '../constants/dimensions';
import {RootState} from '../redux/reducers';
import CurrentSongScreen from '../screens/CurrentSongScreen/CurrentSongScreen';
import HomeScreen from '../screens/HomeScreen.tsx/HomeScreen';
import ListSongScreen from '../screens/ListSongScreen/ListSongScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const translateY = useRef(new Animated.Value(dimensions.h)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: listTrack.isOpenCurrentSong ? 0 : dimensions.h,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [listTrack.isOpenCurrentSong]);

  return (
    <View style={{flex: 1}}>
      {listTrack.listSong.length > 0 && <PlayerWidget />}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListSongScreen" component={ListSongScreen} />
        {/* <Stack.Screen
          name="CurrentSongScreen"
          component={CurrentSongScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        /> */}
      </Stack.Navigator>
      <Animated.View
        style={{
          position: 'absolute',
          width: dimensions.w,
          height: dimensions.h,
          top: 0,
          transform: [{translateY: translateY}],
          zIndex: 1000,
        }}>
        <CurrentSongScreen />
      </Animated.View>
    </View>
  );
};

export default HomeStack;
