import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../constants/colors';
import dimensions from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {login} from '../redux/actions/userActions';
import {RootState} from '../redux/reducers';
import MyTextInput from './MyTextInput';

const SignInForm = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user._id) {
      navigation.navigate('MainDrawer');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <MyTextInput placeholder="Email" value={email} setValue={setEmail} />
      <MyTextInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureText
      />
      <TouchableScale
        onPress={signIn}
        style={{
          width: dimensions.w * 0.4,
          backgroundColor: rootColor.primaryColor,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: rootColor.whiteColor,
            fontFamily: rootFonts.semiBold,
          }}>
          Sign In
        </Text>
      </TouchableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.w,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInForm;
