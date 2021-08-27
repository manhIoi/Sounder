import React from 'react';
import {View, Text} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setIndex} from '../redux/actions/indexDrawerAction';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen/ChangePasswordScreen';

const Stack = createStackNavigator();

const AccountStack = () => {
  const isFocus = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocus) {
      dispatch(setIndex(2));
    }
    return;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
