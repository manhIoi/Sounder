import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../constants/colors';
import dimensions, {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {login} from '../redux/actions/userActions';
import {RootState} from '../redux/reducers';
import MyTextInput from './MyTextInput';
import PrimaryBtn from './PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {showAlertAction} from '../redux/actions/alertActions';

const SignInForm = ({showSignUpForm}: {showSignUpForm: () => void}) => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signIn = async () => {
    const res = await dispatch(login(email, password));
    if (res?.error) {
      dispatch(showAlertAction({title: 'Thông báo', message: res.error}));
    }
  };

  useEffect(() => {
    if (user._id) {
      navigation.navigate('MainDrawer');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Đăng nhập</Text>
      </View>
      <View style={styles.fields}>
        <MyTextInput
          leftIcon={
            <AntDesign name="user" color={rootColor.whiteColor} size={20} />
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
            <AntDesign name="lock" color={rootColor.whiteColor} size={20} />
          }
        />
      </View>

      <View style={styles.actions}>
        <View style={{marginBottom: spacing.normal}}>
          <PrimaryBtn callback={signIn} title="Đăng nhập" uppercase />
        </View>
        <PrimaryBtn
          callback={showSignUpForm}
          title="Đăng ký"
          uppercase
          outline
        />
      </View>
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
  heading: {
    justifyContent: 'center',
    marginBottom: spacing.normal * 2,
  },
  headingText: {
    fontFamily: rootFonts.extraBold,
    color: rootColor.primaryColor,
    fontSize: 30,
  },
  fields: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.normal * 2,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInForm;
