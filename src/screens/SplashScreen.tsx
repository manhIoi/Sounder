import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import rootColor from '../constants/colors';

const SplashScreen = () => {
  const [isLoadding, setIsLoadding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadding(false);
    }, 1000);
  }, []);

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
