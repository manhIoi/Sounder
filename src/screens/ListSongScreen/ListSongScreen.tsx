import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {View, Text, FlatList, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rootApi from '../../api';
import Loading from '../../components/Loading';
import SongItem from '../../components/SongItem';
import {setListTrack} from '../../redux/actions/listTrackAction';
import {RootState} from '../../redux/reducers';
import {SongType} from '../../types';

import styles, {imgBannerH, imgBannerW} from './styles';

const ListSongScreen = () => {
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const route = useRoute();
  const {album} = route.params;
  const [songs, setSongs] = useState<SongType[]>([]);

  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scale = scrollY.interpolate({
    inputRange: [0, imgBannerH],
    outputRange: [1, 0],
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [0, imgBannerH],
    outputRange: [0, 100],
  });

  const handlePress = (index: number) => {
    if (listTrack.listSong[listTrack.songSelected]?._id === songs[index]?._id) {
      dispatch(
        setListTrack({
          isOpenCurrentSong: true,
        }),
      );
    } else {
      dispatch(
        setListTrack({
          listSong: songs,
          songSelected: index,
          isOpenCurrentSong: true,
        }),
      );
    }
  };

  const getSongsData = async () => {
    const data = await rootApi.getSongByAlbum(album._id);
    if (data) {
      setSongs(data);
    }
  };

  useEffect(() => {
    getSongsData();
  }, []);

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {y: scrollY},
            },
          },
        ],
        {useNativeDriver: true},
      )}>
      <View style={styles.center}>
        <Animated.Image
          source={{uri: album.image}}
          style={[
            styles.imgBanner,
            {
              transform: [
                {
                  scale: scale,
                },
              ],
              opacity: scale,
              borderRadius: borderRadius,
            },
          ]}
        />
      </View>
      {songs.length > 0 ? (
        <FlatList
          data={songs}
          style={styles.listSong}
          keyExtractor={(item, index) => item._id + ''}
          renderItem={({item, index}) => {
            return (
              <SongItem song={item} index={index} handlePress={handlePress} />
            );
          }}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
    </Animated.ScrollView>
  );
};

export default ListSongScreen;
