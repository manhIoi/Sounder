import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {SongType} from '../types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SongActions from './SongActions';
const imgH = 75;
const imgW = imgH;

const SongItem = ({
  song,
  index,
  handlePress,
  action,
  callbackAction,
}: {
  song: SongType;
  index: number;
  action: string;
  callbackAction: (song: SongType | number) => void;
  handlePress: (index: number) => void;
}) => {
  return (
    <Swipeable
      useNativeAnimations={true}
      overshootRight={false}
      renderRightActions={(
        progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation,
      ) => {
        const scale = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });
        return (
          <Animated.View style={{flexDirection: 'row', transform: [{scale}]}}>
            <SongActions type={action} callback={() => callbackAction(song)} />
          </Animated.View>
        );
      }}>
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
    </Swipeable>
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
  deleteBox: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SongItem;
