import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import rootColor from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SplashScreen = () => {
  const [isLoadding, setIsLoadding] = useState(true);
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      setIsLoadding(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoadding) {
      navigation.navigate('MainDrawer');
      // fake login
    }
  }, [isLoadding]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: rootColor.primaryColor,
      }}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop
        speed={0.7}
      />
    </View>
  );
};

export default SplashScreen;
