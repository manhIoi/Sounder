import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Animated} from 'react-native';
import Overlay from '../../components/Overlay';
import PlayerSong from '../../components/PlayerSong';
import rootColor from '../../constants/colors';
import dimensions, {rangeItemCurrentSong} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';
import {mockListSongs} from '../../constants/mockdata';
import TrackPlayer, {Track} from 'react-native-track-player';

import styles from './styles';
import {SongType} from '../../types';
import DetailSongs from '../../components/DetailSongs';

const {w, h, widthImg, heightImg, containerH, detailW, detailH} =
  rangeItemCurrentSong;

const CurrentSong = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.divide(scrollX, dimensions.w);
  const [indexCurrentSong, setIndexCurrentSong] = useState(2);
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  useEffect(() => {
    if (mockListSongs.length > 0) {
      const startPlayer = async () => {
        const tmp = await mockListSongs.map(song => {
          return {
            id: song._id,
            url: song.url,
            type: song.type,
            album: 'My Album',
            artist: song.artist,
            artwork: song.artwork,
            title: song.title,
          };
        });
        let isInit = await trackPlayerInit(tmp);
        console.log(isInit);
        setIsTrackPlayerInit(true);
        if (isInit) {
          await TrackPlayer.skip(indexCurrentSong);
          TrackPlayer.play();
        }
      };
      startPlayer();
    }
  }, []);

  useEffect(() => {
    console.log('index current song', indexCurrentSong);
    const moveSong = async () => {
      await TrackPlayer.skip(indexCurrentSong);
      TrackPlayer.play();
    };
    moveSong();
  }, [indexCurrentSong]);

  return (
    <View style={{flex: 1}}>
      <Overlay scrollX={scrollX} />
      <DetailSongs
        progress={progress}
        scrollX={scrollX}
        listSong={mockListSongs}
        setIndexCurrentSong={setIndexCurrentSong}
      />
      <PlayerSong />
    </View>
  );
};

const trackPlayerInit = async (listTrack: any) => {
  if (listTrack.length > 0) {
    await TrackPlayer.setupPlayer();
    console.log('Player is ready');
    await TrackPlayer.add(listTrack);
    // await TrackPlayer.updateOptions({
    //   stopWithApp: true,
    //   capabilities: [
    //     TrackPlayer.CAPABILITY_PLAY,
    //     TrackPlayer.CAPABILITY_PAUSE,
    //     TrackPlayer.CAPABILITY_JUMP_FORWARD,
    //     TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    //     TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    //     TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    //   ],
    // });
    return true;
  }
};

export default CurrentSong;
