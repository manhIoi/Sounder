import React from 'react';
import {View, Text, Animated} from 'react-native';
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
  setIndexCurrentSong,
}: {
  listSong: SongType[];
  scrollX: Animated.Value;
  progress: Animated.AnimatedDivision;
  defaultIndex: number;
  setIndexCurrentSong: (index: number) => void;
}) => {
  return (
    <>
      <Animated.FlatList
        data={listSong}
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
            <View
              style={{
                width: dimensions.w,
                height: dimensions.h,
                zIndex: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: containerH,
                }}>
                <Animated.Image
                  source={{uri: item.artwork}}
                  style={{
                    width: widthImg,
                    height: heightImg,
                    opacity,
                    transform: [{translateY}],
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      <Animated.View
        style={{
          width: detailW,
          height: detailH,
          backgroundColor: '#fff',
          position: 'absolute',
          top: (containerH - widthImg / 2) / 2,
          zIndex: -1,
          left: (dimensions.w - detailW) / 2,
          transform: [
            {
              rotateY: progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '90deg', '180deg'],
              }),
            },
          ],
        }}></Animated.View>

      <View
        style={{
          width: detailW,
          height: detailH,
          position: 'absolute',
          top: (containerH - widthImg / 2) / 2,
          zIndex: -1,
          left: (dimensions.w - detailW) / 2,
        }}>
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
            <View
              style={{
                position: 'absolute',
                top: (heightImg * 3) / 4,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Text
                style={{
                  fontFamily: rootFonts.bold,
                  color: rootColor.primaryColor,
                  fontSize: 30,
                  opacity,
                }}>
                {item.artist}
              </Animated.Text>
              <Animated.Text
                style={{
                  color: rootColor.grayTextColor,
                  fontSize: 20,
                  fontFamily: rootFonts.regular,
                  opacity,
                }}>
                {item.title}
              </Animated.Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default DetailSongs;
