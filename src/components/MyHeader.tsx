import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import dimensions, {headerH, spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import rootColor from '../constants/colors';

const MyHeader = ({
  title,
  canGoBack,
  headerColor,
  tintColor,
  isDecoration,
}: {
  title: string;
  canGoBack?: boolean;
  headerColor?: string;
  tintColor?: string;
  isDecoration?: boolean;
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <View style={[styles.container, {backgroundColor: headerColor}]}>
      {canGoBack && (
        <TouchableScale
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            color={tintColor ? tintColor : '#111'}
            size={20}
          />
        </TouchableScale>
      )}
      <View>
        <Text style={[styles.title, {color: tintColor}]}>{title}</Text>
        {isDecoration && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: 13,
              borderRadius: 4,
              bottom: 0,
              zIndex: -1,
              backgroundColor: rootColor.primaryColor,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    width: dimensions.w,
    height: headerH + dimensions.statusbarH,
    paddingTop: dimensions.statusbarH,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: rootFonts.semiBold,
    fontSize: 20,
  },
  backBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: dimensions.statusbarH + (headerH - 50) / 2,
    left: 0,
  },
});

export default MyHeader;
