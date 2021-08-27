import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import rootColor from '../constants/colors';
import dimensions, {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {setListTrack} from '../redux/actions/listTrackAction';
import {logout} from '../redux/actions/userActions';
import {showAlertAction} from '../redux/actions/alertActions';

const listDrawerItem = [
  {
    name: 'HomeScreen',
    label: 'Trang chủ',
    icon: (color: string) => <Feather name="home" size={20} color={color} />,
  },
  {
    name: 'MyFavoriteScreen',
    label: 'Album của tôi',
    icon: (color: string) => <AntDesign name="heart" size={20} color={color} />,
  },
  {
    name: 'AccountStack',
    label: 'Tài khoản',
    icon: (color: string) => <Feather name="user" size={20} color={color} />,
  },
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const indexDrawer = useSelector((state: RootState) => state.indexDrawer);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={{flex: 1, paddingTop: dimensions.statusbarH}}>
      <View style={styles.appName}>
        <Text style={styles.appNameText}>Sounder</Text>
      </View>
      <DrawerContentScrollView>
        {listDrawerItem.map((item, index) => (
          <DrawerItem
            key={item.name}
            label={item.label}
            onPress={() => {
              navigation.navigate(item.name);
              dispatch(
                setListTrack({
                  isOpenCurrentSong: false,
                }),
              );
            }}
            pressColor={rootColor.secondaryColor}
            inactiveTintColor={rootColor.whiteColor}
            activeTintColor={rootColor.secondaryColor}
            activeBackgroundColor={rootColor.whiteColor}
            labelStyle={styles.label}
            focused={indexDrawer === index}
            icon={({color}) => item.icon(color)}
          />
        ))}
      </DrawerContentScrollView>
      {user._id && (
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() =>
            dispatch(
              showAlertAction({
                title: 'Bạn có chắc muốn thoát?',
                callbackConfirm: handleLogout,
                isConfirm: true,
              }),
            )
          }>
          <View style={styles.logoutWrap}>
            <MaterialIcons
              name="logout"
              size={25}
              color={rootColor.whiteColor}
            />
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: rootFonts.semiBold,
    fontSize: 16,
    marginLeft: -12,
  },
  logoutBtn: {
    alignSelf: 'center',
    marginBottom: spacing.normal * 2,
  },
  logoutWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontFamily: rootFonts.semiBold,
    color: rootColor.whiteColor,
    fontSize: 20,
    marginLeft: spacing.normal,
  },
  appName: {
    minHeight: dimensions.h * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    color: rootColor.whiteColor,
    fontFamily: rootFonts.extraBold,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default CustomDrawer;
