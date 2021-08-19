import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {Image} from 'react-native-animatable';
import TouchableScale from 'react-native-touchable-scale';
import dimensions, {authFormDimensions} from '../../constants/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import rootColor from '../../constants/colors';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

const inputRange = [0, 1];

const AuthScreen = () => {
  const CloseBtn = Animated.createAnimatedComponent(TouchableScale);
  const [isShow, setIsShow] = useState(false);
  const [action, setAction] = useState(0);
  // 0 -> Sign In, 1 Sign Up
  const progress = useRef(new Animated.Value(0)).current;

  const showForm = (actionSelected: number) => {
    setAction(actionSelected);
    setIsShow(true);
  };

  const closeForm = () => {
    setIsShow(false);
  };

  const showSignInForm = () => {
    showForm(0);
  };

  const showSignUpForm = () => {
    showForm(1);
  };

  const outputCaculate = (inRange: number[], outRange: any[]) => {
    return progress.interpolate({
      inputRange: inRange,
      outputRange: outRange,
    });
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isShow ? 1 : 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [isShow]);

  return (
    <View style={styles.screen}>
      <Animated.Image
        source={{
          uri: 'https://nhrwallpapers.com/wp-content/uploads/2021/03/Cool-iPhone-Wallpaper-HD.jpg',
        }}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: outputCaculate(inputRange, [
                  0,
                  -authFormDimensions.h,
                ]),
              },
              {
                scale: outputCaculate(inputRange, [1, 1.2]),
              },
            ],
          },
        ]}
      />
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.wrapBtn,
            {
              opacity: outputCaculate([0, 0.25], [1, 0]),
            },
          ]}>
          <TouchableScale style={styles.btn} onPress={showSignInForm}>
            <Text style={styles.textBtn}>Sign In</Text>
          </TouchableScale>
          <TouchableScale style={styles.btn} onPress={showSignUpForm}>
            <Text style={styles.textBtn}>Sign Up</Text>
          </TouchableScale>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.form,
          {
            transform: [
              {
                translateY: outputCaculate(inputRange, [
                  authFormDimensions.h,
                  0,
                ]),
              },
            ],
          },
        ]}>
        <CloseBtn
          style={[
            styles.closeBtn,
            {
              opacity: progress.interpolate({
                inputRange,
                outputRange: [0, 1],
              }),
              transform: [
                {
                  rotate: outputCaculate(inputRange, ['0deg', '180deg']),
                },
              ],
            },
          ]}
          onPress={closeForm}>
          <AntDesign name="close" size={20} color={rootColor.whiteColor} />
        </CloseBtn>
        {action ? (
          <SignUpForm showSignInForm={showSignInForm} />
        ) : (
          <SignInForm showSignUpForm={showSignUpForm} />
        )}
      </Animated.View>
    </View>
  );
};

export default AuthScreen;
