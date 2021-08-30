import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-animatable';
import rootColor from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const Avatar = ({
  name,
  description,
  row,
  image,
  sizeImage,
  isCircle,
  hideName,
  tintColor,
}: {
  name?: string;
  hideName?: boolean;
  description?: string;
  row?: boolean;
  image?: string;
  sizeImage: number;
  isCircle?: boolean;
  tintColor?: string;
}) => {
  return (
    <View style={[styles.container, row && {flexDirection: 'row'}]}>
      {image ? (
        <Image
          source={{uri: image}}
          style={[
            styles.image,
            {
              width: sizeImage,
              aspectRatio: 1,
              borderRadius: isCircle ? sizeImage : sizeImage / 10,
              margin: spacing.normal,
            },
          ]}
        />
      ) : (
        <View
          style={[
            {
              width: sizeImage,
              aspectRatio: 1,
              borderRadius: isCircle ? sizeImage : sizeImage / 10,
            },
            styles.defaultImage,
          ]}>
          <Text style={[styles.textImage, {fontSize: sizeImage / 2.5}]}>
            {name && name[0]}
          </Text>
        </View>
      )}

      {!hideName && (
        <View
          style={[
            styles.containerText,
            !row && {
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.name, {color: tintColor ? tintColor : '#111'}]}>
            {name}
          </Text>
          <Text
            style={[
              styles.description,
              {color: tintColor ? tintColor : '#111'},
            ]}>
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  defaultImage: {
    backgroundColor: rootColor.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacing.normal,
  },
  textImage: {
    fontFamily: rootFonts.extraBold,
    color: rootColor.whiteColor,
  },
  image: {},
  containerText: {
    justifyContent: 'center',
  },
  name: {
    color: '#111',
    fontFamily: rootFonts.extraBold,
    fontSize: 25,
  },
  description: {
    color: 'gray',
    fontFamily: rootFonts.medium,
  },
});

export default Avatar;
