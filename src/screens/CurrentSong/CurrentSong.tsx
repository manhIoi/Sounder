import React, {useRef} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Animated} from 'react-native';
import Overlay from '../../components/Overlay';
import rootColor from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';
import {mockListSongs} from '../../constants/mockdata';

const widthImg = dimensions.w * 0.7;
const heightImg = widthImg;
const containerH = dimensions.h * 0.6;
const detailW = dimensions.w * 0.9;
const detailH = heightImg * 1.3;

const CurrentSong = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.divide(scrollX, dimensions.w);
  return (
    <View style={{flex: 1}}>
      <Overlay scrollX={scrollX} />
      <Animated.FlatList
        data={mockListSongs}
        keyExtractor={item => item._id}
        horizontal
        pagingEnabled
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
        {mockListSongs.map((item, index) => {
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
            <Animated.View
              style={{
                position: 'absolute',
                top: (heightImg * 3) / 4,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                opacity,
              }}>
              <Text
                style={{
                  fontFamily: rootFonts.bold,
                  color: rootColor.primaryColor,
                  fontSize: 30,
                }}>
                {item.artist}
              </Text>
              <Text
                style={{
                  color: rootColor.grayTextColor,
                  fontSize: 20,
                  fontFamily: rootFonts.regular,
                }}>
                {item.title}
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default CurrentSong;
