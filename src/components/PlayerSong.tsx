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
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import convertTime from '../utils/convertTime';

const heightContainer =
  dimensions.h -
  rangeItemCurrentSong.containerH -
  (3 / 16) * rangeItemCurrentSong.heightImg;
const widthPlayer = rangeItemCurrentSong.detailW;
const heightPlayer = (heightContainer * 3) / 4;
const btnPlaySize = 75;

const PlayerSong = ({
  sliderValue,
  slidingStarted,
  slidingCompleted,
  onButtonPressed,
  setIndexCurrentSong,
}: {
  sliderValue: number;
  slidingStarted: () => void;
  slidingCompleted: (value: number) => void;
  onButtonPressed: () => void;
  setIndexCurrentSong: (index: number) => void;
}) => {
  const currentSong = useSelector((state: RootState) => state.currentSong);
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const {listSong, songSelected} = listTrack;

  const prevBtnPress = () => {
    if (songSelected === 0) {
      setIndexCurrentSong(listSong.length - 1);
    } else {
      setIndexCurrentSong(songSelected - 1);
    }
  };
  const nextBtnPress = () => {
    if (songSelected === listSong.length - 1) {
      setIndexCurrentSong(0);
    } else {
      setIndexCurrentSong(songSelected + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{width: '100%'}}>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            maximumTrackTintColor="#eaeaea"
            trackStyle={{height: 3}}
            thumbStyle={styles.thumb}
            minimumTrackTintColor={rootColor.middleColor}
            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}
          />
          <View style={styles.detailTime}>
            <Text style={styles.timeText}>
              {/* {convertTime(currentSong.position)} */}
              {convertTime(sliderValue * currentSong.duration)}
            </Text>
            <Text style={styles.timeText}>
              {convertTime(currentSong.duration)}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableScale
            style={styles.btnPlay}
            activeScale={0.7}
            onPress={prevBtnPress}>
            <MaterialCommunityIcons
              name="skip-previous"
              size={40}
              color={rootColor.secondaryColor}
            />
          </TouchableScale>

          <TouchableScale style={styles.btnPlay} onPress={onButtonPressed}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientBtnPlay}
              colors={rootColor.colorsGradient}>
              <Feather
                name={currentSong.isPlaying ? 'pause' : 'play'}
                size={30}
                color={rootColor.whiteColor}
              />
            </LinearGradient>
          </TouchableScale>

          <TouchableScale
            activeScale={0.7}
            style={styles.btnPlay}
            onPress={nextBtnPress}>
            <MaterialCommunityIcons
              name="skip-next"
              size={40}
              color={rootColor.primaryColor}
            />
          </TouchableScale>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.normal * 2,
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
