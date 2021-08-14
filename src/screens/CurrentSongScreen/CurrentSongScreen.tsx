import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Animated} from 'react-native';
import Overlay from '../../components/Overlay';
import PlayerSong from '../../components/PlayerSong';
import rootColor from '../../constants/colors';
import dimensions, {rangeItemCurrentSong} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';
import {mockListSongs} from '../../constants/mockdata';
import TrackPlayer, {useProgress, Capability} from 'react-native-track-player';

import styles from './styles';
import {SongType} from '../../types';
import DetailSongs from '../../components/DetailSongs';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {setListTrack} from '../../redux/actions/listTrackAction';
import {setCurrentSong} from '../../redux/actions/currentSongAction';

const {w, h, widthImg, heightImg, containerH, detailW, detailH} =
  rangeItemCurrentSong;

const CurrentSongScreen = () => {
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const currentSong = useSelector((state: RootState) => state.currentSong);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {position, duration} = useProgress(250);
  const dispatch = useDispatch();
  const progress = Animated.divide(scrollX, dimensions.w);
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  const setIndexCurrentSong = (index: number) => {
    dispatch(setListTrack({songSelected: index}));
  };

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async (value: number) => {
    await TrackPlayer.seekTo(value * duration);
    setIsSeeking(false);
  };

  const onButtonPressed = () => {
    console.log(currentSong);

    if (currentSong.isPlaying) {
      console.log('playing');
      TrackPlayer.pause();
      dispatch(setCurrentSong({isPlaying: false}));
    } else {
      console.log('pause');
      TrackPlayer.play();
      dispatch(setCurrentSong({isPlaying: true}));
    }
  };

  useEffect(() => {
    if (listTrack.listSong.length > 0) {
      const startPlayer = async () => {
        const tmp = await listTrack.listSong.map((song: SongType) => {
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
          await TrackPlayer.skip(listTrack.songSelected);
          TrackPlayer.play();
        }
      };
      startPlayer();
    }
  }, []);
  // [] rerender list tracking is change

  useEffect(() => {
    console.log('index current song', listTrack.songSelected);
    const moveSong = async () => {
      console.log(listTrack.songSelected);
      if (isTrackPlayerInit) {
        await TrackPlayer.skip(listTrack.songSelected);
      } else {
        console.log('track have not init');
        // set loading wait track initing
      }
      TrackPlayer.play();
    };
    moveSong();
  }, [listTrack.songSelected]);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
      dispatch(setCurrentSong({position, duration}));
    }
  }, [position, duration]);

  return (
    <View style={{flex: 1}}>
      <Overlay scrollX={scrollX} listSong={listTrack.listSong} />
      <DetailSongs
        progress={progress}
        scrollX={scrollX}
        listSong={listTrack.listSong}
        setIndexCurrentSong={setIndexCurrentSong}
        defaultIndex={listTrack.songSelected}
      />
      <PlayerSong
        sliderValue={sliderValue}
        slidingStarted={slidingStarted}
        slidingCompleted={slidingCompleted}
        onButtonPressed={onButtonPressed}
      />
    </View>
  );
};

const trackPlayerInit = async (listTrack: any) => {
  if (listTrack.length > 0) {
    await TrackPlayer.setupPlayer();
    console.log('Player is ready');
    await TrackPlayer.add(listTrack);
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    return true;
  }
};

export default CurrentSongScreen;
