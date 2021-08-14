import React from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Animated, FlatList} from 'react-native';
import rootColor from '../constants/colors';
import dimensions, {rangeItemCurrentSong} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {SongType} from '../types';
const {w, h, widthImg, heightImg, containerH, detailW, detailH} =
  rangeItemCurrentSong;

const DetailSongs = ({
  listSong,
  scrollX,
  progress,
  defaultIndex,
  currentIndex,
  setIndexCurrentSong,
}: {
  listSong: SongType[];
  scrollX: Animated.Value;
  progress: Animated.AnimatedDivision;
  defaultIndex: number;
  currentIndex: number;
  setIndexCurrentSong: (index: number) => void;
}) => {
  const ref = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    ref?.current?.scrollToOffset({
      animated: true,
      offset: index * w,
    });
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <Animated.FlatList
        data={listSong}
        ref={ref}
        keyExtractor={item => item._id + ''}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={defaultIndex}
        onMomentumScrollEnd={e => {
          setIndexCurrentSong(Math.ceil(e.nativeEvent.contentOffset.x / w));
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * dimensions.w,
            index * dimensions.w,
            (index + 1) * dimensions.w,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, 20],
          });
          return (
            <View style={styles.container}>
              <View style={styles.wraper}>
                <Animated.Image
                  source={{uri: item.artwork}}
                  style={[
                    styles.imageSong,
                    {opacity, transform: [{translateY}]},
                  ]}
                />
              </View>
            </View>
          );
        }}
      />
      <Animated.View
        style={[
          styles.overlay,
          {
            transform: [
              {
                rotateY: progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '90deg', '180deg'],
                }),
              },
            ],
          },
        ]}
      />

      <View style={styles.textContainer}>
        {listSong.map((item, index) => {
          const inputRange = [
            Math.floor((index - 0.5) * dimensions.w),
            Math.floor(index * dimensions.w),
            Math.floor((index + 0.5) * dimensions.w),
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <View style={styles.textWrap}>
              <Animated.Text style={[styles.title, {opacity}]}>
                {item.title}
              </Animated.Text>
              <Animated.Text style={[styles.artist, {opacity}]}>
                {item.artist}
              </Animated.Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.w,
    height: dimensions.h,
    zIndex: 10,
  },
  wraper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: containerH,
  },
  imageSong: {
    width: widthImg,
    height: heightImg,
  },
  overlay: {
    width: detailW,
    height: detailH,
    backgroundColor: '#fff',
    position: 'absolute',
    top: (containerH - widthImg / 2) / 2,
    zIndex: -1,
    left: (dimensions.w - detailW) / 2,
  },
  textContainer: {
    width: detailW,
    height: detailH,
    position: 'absolute',
    top: (containerH - widthImg / 2) / 2,
    zIndex: -1,
    left: (dimensions.w - detailW) / 2,
  },
  textWrap: {
    position: 'absolute',
    top: (heightImg * 3) / 4,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: rootFonts.bold,
    color: rootColor.primaryColor,
    fontSize: 30,
  },
  artist: {
    color: rootColor.grayTextColor,
    fontSize: 20,
    fontFamily: rootFonts.regular,
  },
});

export default DetailSongs;
