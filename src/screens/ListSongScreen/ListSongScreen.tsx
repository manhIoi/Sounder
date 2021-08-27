import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {View, Text, FlatList, Animated, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rootApi from '../../api';
import Loading from '../../components/Loading';
import SongItem from '../../components/SongItem';
import {setListTrack} from '../../redux/actions/listTrackAction';
import {RootState} from '../../redux/reducers';
import {SongType} from '../../types';

import styles, {imgBannerH, imgBannerW} from './styles';
import {addSongToMyFavorite} from '../../redux/actions/myFavoriteAction';
import MyHeader from '../../components/MyHeader';
import MyAlert from '../../components/MyAlert';
import {showAlertAction} from '../../redux/actions/alertActions';

const ListSongScreen = () => {
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const user = useSelector((state: RootState) => state.user);
  const route = useRoute();
  const {album} = route.params;
  console.log(album);

  const [songs, setSongs] = useState<SongType[]>([]);

  const scrollY = useRef(new Animated.Value(0)).current;
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

  const addToMyFavorite = async (song: SongType) => {
    const res = await dispatch(addSongToMyFavorite(user._id, song));
    if (typeof res === 'string') {
      dispatch(showAlertAction({title: 'Lỗi', message: res}));
    } else {
      dispatch(showAlertAction({title: 'Thêm thành công'}));
    }
  };

  useEffect(() => {
    getSongsData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.containerHeader}>
        <MyHeader title={album.name} canGoBack isDecoration />
      </View>
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
            style={[styles.listSong]}
            keyExtractor={(item, index) => item._id + ''}
            renderItem={({item, index}) => {
              return (
                <SongItem
                  action={'favorite'}
                  callbackAction={() => addToMyFavorite(item)}
                  song={item}
                  index={index}
                  handlePress={handlePress}
                />
              );
            }}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <Loading />
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default ListSongScreen;
