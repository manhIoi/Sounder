import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-animatable';
import rootColor from '../constants/colors';
import {rootFonts} from '../constants/fonts';

const CustomAvatar = ({image, name}: {image?: string; name: string}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: rootColor.primaryColor,
        borderWidth: 1,
        borderColor: rootColor.secondaryColor,
      }}>
      {image ? (
        <Image style={{width: '100%', height: '100%'}} source={{uri: image}} />
      ) : (
        <Text
          style={{
            color: rootColor.whiteColor,
            fontFamily: rootFonts.extraBold,
            fontSize: 18,
          }}>
          {name[0]}
        </Text>
      )}
    </View>
  );
};

export default CustomAvatar;
