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
import dimensions, {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {login} from '../redux/actions/userActions';
import {RootState} from '../redux/reducers';
import MyTextInput from './MyTextInput';
import PrimaryBtn from './PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Alert} from 'react-native';

const SignInForm = ({showSignUpForm}: {showSignUpForm: () => void}) => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signIn = async () => {
    const res = await dispatch(login(email, password));
    if (res?.error) {
      Alert.alert('Thông báo', res.error);
    }
  };

  useEffect(() => {
    if (user._id) {
      navigation.navigate('MainDrawer');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <MyTextInput
        leftIcon={
          <AntDesign name="user" color={rootColor.primaryColor} size={20} />
        }
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <MyTextInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureText
        leftIcon={
          <AntDesign name="lock" color={rootColor.primaryColor} size={20} />
        }
      />
      <View style={{marginBottom: spacing.normal}}>
        <PrimaryBtn callback={signIn} title="Sign In" uppercase />
      </View>
      <PrimaryBtn callback={showSignUpForm} title="Sign Up" uppercase outline />
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
