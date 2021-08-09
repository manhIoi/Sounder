import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-animatable';
import rootColor from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const MasonryItem = ({
  image,
  title,
  artist,
}: {
  image: string;
  title: string;
  artist: string;
}) => {
  return (
    <>
      <Image source={{uri: image}} style={StyleSheet.absoluteFill} />
      <View style={styles.wrapperText}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.normalText}>{artist}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: rootColor.whiteColor,
    fontSize: 22,
    textTransform: 'uppercase',
    fontFamily: rootFonts.semiBold,
    textAlign: 'center',
  },
  normalText: {
    color: rootColor.grayTextColor,
    fontSize: 16,
    fontFamily: rootFonts.regular,
  },
  wrapperText: {
    zIndex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.normal / 2,
  },
});

export default MasonryItem;
