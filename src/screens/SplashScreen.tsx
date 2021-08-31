import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {AsyncStorage, View} from 'react-native';
import rootColor from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/userActions';

const SplashScreen = () => {
  const [isLoadding, setIsLoadding] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    const initApp = async () => {
      const authToken = await AsyncStorage.getItem('authToken');
      if (authToken) {
        const token = authToken.replace(/"/g, '');
        dispatch(login(null, null, token));
      }
    };
    initApp();

    setTimeout(() => {
      navigation.replace('MainDrawer');
    }, 2000);
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
