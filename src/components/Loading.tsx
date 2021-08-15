import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import rootColor from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={rootColor.primaryColor} />
        <Text
          style={{
            fontFamily: rootFonts.semiBold,
            marginTop: spacing.normal,
            color: rootColor.primaryColor,
          }}>
          Đang tải
        </Text>
      </View>
    </View>
  );
};

export default Loading;
