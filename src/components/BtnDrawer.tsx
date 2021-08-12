import {DrawerNavigationProp, useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {spacing} from '../constants/dimensions';

const BtnDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const handlePress = () => {
    navigation.toggleDrawer();
  };
  return (
    <TouchableScale style={{padding: spacing.normal / 2}} onPress={handlePress}>
      {!isDrawerOpen ? (
        <Ionicons name="md-menu-sharp" color="#111" size={30} />
      ) : (
        <Ionicons name="md-close" color="#111" size={30} />
      )}
    </TouchableScale>
  );
};

export default BtnDrawer;
