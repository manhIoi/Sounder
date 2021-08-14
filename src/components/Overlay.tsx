import React from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {rangeItemCurrentSong} from '../constants/dimensions';
import {mockListSongs} from '../constants/mockdata';
import {SongType} from '../types';

const {w, h, widthImg, heightImg, containerH, detailW, detailH} =
  rangeItemCurrentSong;

interface OverlayProps {
  scrollX: Animated.Value;
  listSong: SongType[];
}

const Overlay = (props: OverlayProps) => {
  const {scrollX, listSong} = props;
  return (
    <>
      {listSong.map((item, index) => {
        const inputRange = [(index - 0.7) * w, index * w, (index + 0.7) * w];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <Animated.Image
              source={{uri: item.artwork}}
              blurRadius={5}
              style={[
                StyleSheet.absoluteFillObject,
                styles.img,
                {
                  opacity,
                },
              ]}
            />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    backgroundColor: 'rgba(0,0,0,0.09)',
    width: w,
    height: h,
  },
  img: {
    position: 'absolute',
    resizeMode: 'cover',
  },
});

export default Overlay;
