import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../constants/colors';
import {bottomTabDimension, spacing} from '../constants/dimensions';
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
      style={styles.container}>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressing,
            {
              right:
                100 - (currentSong.position / currentSong.duration) * 100 + '%',
            },
          ]}
        />
      </View>
      <Image
        style={styles.img}
        source={{uri: listSong[songSelected]?.artwork}}
      />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{listSong[songSelected]?.title}</Text>
        <Text style={styles.artist}>{listSong[songSelected]?.artist}</Text>
      </View>
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderWidth: 1,
    borderColor: rootColor.whiteColor,
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'lightgray',
    zIndex: 50,
  },
  progressing: {
    position: 'absolute',
    left: 0,

    height: '100%',
    backgroundColor: rootColor.primaryColor,
  },
  img: {
    height: '100%',
    aspectRatio: 1,
  },
  wrapText: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: spacing.normal,
  },
  artist: {
    fontFamily: rootFonts.semiBold,
    fontSize: 18,
    color: rootColor.middleColor,
  },
  title: {
    fontFamily: rootFonts.semiBold,
    color: rootColor.whiteColor,
  },
});

export default PlayerWidget;
