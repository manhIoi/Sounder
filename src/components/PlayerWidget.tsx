import React from 'react';
import {View, Text, Image} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';
import {setListTrack} from '../redux/actions/listTrackAction';
import {RootState} from '../redux/reducers';
import {SongType} from '../types';

const PlayerWidget = () => {
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const currentSong = useSelector((state: RootState) => state.currentSong);
  const dispatch = useDispatch();
  const {listSong, songSelected} = listTrack;

  return (
    <TouchableScale
      onPress={() => dispatch(setListTrack({isOpenCurrentSong: true}))}
      style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 75,
        zIndex: 1000,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: 'lightgray',
          zIndex: 50,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right:
              100 - (currentSong.position / currentSong.duration) * 100 + '%',
            height: '100%',
            backgroundColor: rootColor.primaryColor,
          }}></View>
      </View>
      <Image
        style={{height: '100%', aspectRatio: 1}}
        source={{uri: listSong[songSelected].artwork}}
      />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          marginLeft: spacing.normal,
        }}>
        <Text
          style={{
            fontFamily: rootFonts.semiBold,
            color: rootColor.middleColor,
          }}>
          {listSong[songSelected].title}
        </Text>
        <Text
          style={{fontFamily: rootFonts.semiBold, color: rootColor.whiteColor}}>
          {listSong[songSelected].artist}
        </Text>
      </View>
    </TouchableScale>
  );
};

export default PlayerWidget;
