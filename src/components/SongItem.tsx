import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {SongType} from '../types';

const imgH = 75;
const imgW = imgH;

const SongItem = ({
  song,
  index,
  handlePress,
}: {
  song: SongType;
  index: number;
  handlePress: (index: number) => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePress(index)}
      style={styles.container}>
      <Image source={{uri: song.artwork}} style={styles.img} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.normal,
  },
  wrapText: {
    justifyContent: 'center',
    marginLeft: spacing.normal * 2,
  },
  title: {
    fontFamily: rootFonts.semiBold,
    fontSize: 20,
  },
  artist: {
    fontFamily: rootFonts.regular,
  },
  img: {
    width: imgW,
    height: imgH,
  },
});

export default SongItem;
