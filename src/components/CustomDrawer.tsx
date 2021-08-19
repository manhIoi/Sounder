import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import rootColor from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const listDrawerItem = [
  {
    name: 'HomeStack',
    label: 'Trang chủ',
    icon: (color: string) => <Feather name="home" size={20} color={color} />,
  },
  {
    name: 'MyFavoriteScreen',
    label: 'Album của tôi',
    icon: (color: string) => <AntDesign name="heart" size={20} color={color} />,
  },
  {
    name: 'AccountScreen',
    label: 'Tài khoản',
    icon: (color: string) => <Feather name="user" size={20} color={color} />,
  },
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [isFocused, setIsFocused] = useState(0);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        {listDrawerItem.map((item, index) => (
          <DrawerItem
            key={item.name}
            label={item.label}
            onPress={() => {
              setIsFocused(index);
              navigation.navigate(item.name);
            }}
            pressColor={rootColor.secondaryColor}
            inactiveTintColor={rootColor.whiteColor}
            activeTintColor={rootColor.secondaryColor}
            activeBackgroundColor={rootColor.whiteColor}
            labelStyle={styles.label}
            focused={isFocused === index}
            icon={({color}) => item.icon(color)}
          />
        ))}
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutBtn}>
        <View style={styles.logoutWrap}>
          <MaterialIcons name="logout" size={25} color={rootColor.whiteColor} />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
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
});

export default CustomDrawer;
