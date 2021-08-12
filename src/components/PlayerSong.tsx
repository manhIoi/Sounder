import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import dimensions, {
  rangeItemCurrentSong,
  spacing,
} from '../constants/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import rootColor from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';
import {rootFonts} from '../constants/fonts';

const heightContainer =
  dimensions.h -
  rangeItemCurrentSong.containerH -
  (3 / 16) * rangeItemCurrentSong.heightImg;
const widthPlayer = rangeItemCurrentSong.detailW;
const heightPlayer = (heightContainer * 3) / 4;
const btnPlaySize = 75;

const PlayerSong = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{flex: 1, padding: spacing.normal}}>
          <Slider
            maximumTrackTintColor="#eaeaea"
            trackStyle={{height: 3}}
            thumbStyle={styles.thumb}
            minimumTrackTintColor={rootColor.middleColor}
          />
          <View style={styles.detailTime}>
            <Text style={styles.timeText}>0:00</Text>
            <Text style={styles.timeText}>3:45</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableScale style={styles.btnPlay} activeScale={0.7}>
              <MaterialCommunityIcons
                name="skip-previous"
                size={40}
                color={rootColor.secondaryColor}
              />
            </TouchableScale>

            <TouchableScale style={styles.btnPlay}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientBtnPlay}
                colors={rootColor.colorsGradient}>
                <Feather name="play" size={30} color={rootColor.whiteColor} />
              </LinearGradient>
            </TouchableScale>

            <TouchableScale activeScale={0.7} style={styles.btnPlay}>
              <MaterialCommunityIcons
                name="skip-next"
                size={40}
                color={rootColor.primaryColor}
              />
            </TouchableScale>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.w,
    height: heightContainer,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: widthPlayer,
    height: heightPlayer,
    backgroundColor: '#fff',
  },
  btnPlay: {
    width: btnPlaySize,
    height: btnPlaySize,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBtnPlay: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontFamily: rootFonts.medium,
    fontSize: 18,
    // color: rootColor.middleColor,
    color: '#111',
  },
  thumb: {
    width: 25,
    height: 25,
    backgroundColor: rootColor.whiteColor,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'rgba(191, 84, 233, 0.5)',
  },
});

export default PlayerSong;
