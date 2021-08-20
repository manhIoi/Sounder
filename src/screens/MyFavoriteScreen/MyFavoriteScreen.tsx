import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyHeader from '../../components/MyHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import SongItem from '../../components/SongItem';
import rootColor from '../../constants/colors';
import {setIndex} from '../../redux/actions/indexDrawerAction';
import {setListTrack} from '../../redux/actions/listTrackAction';
import {
  getSongFromMyFavorite,
  removeSongFromMyFavorite,
} from '../../redux/actions/myFavoriteAction';
import {RootState} from '../../redux/reducers';
import {SongType} from '../../types';
import styles from './styles';

const MyFavoriteScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const myFavorite = useSelector((state: RootState) => state.myFavorite);
  const listTrack = useSelector((state: RootState) => state.listTrack);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const handlePress = (index: number) => {
    if (
      listTrack.listSong[listTrack.songSelected]?._id ===
      myFavorite.listSong[index]?._id
    ) {
      dispatch(
        setListTrack({
          isOpenCurrentSong: true,
        }),
      );
    } else {
      dispatch(
        setListTrack({
          listSong: myFavorite.listSong,
          songSelected: index,
          isOpenCurrentSong: true,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(setIndex(1));
  }, [navigation]);

  const removeFromFavorite = async (item: SongType) => {
    const res = await dispatch(removeSongFromMyFavorite(user._id, item._id));
    console.log(typeof res === 'string');

    if (typeof res === 'string') {
      Alert.alert('Lỗi', res);
    } else {
      Alert.alert('Thông báo', 'Remove success');
    }
  };

  useEffect(() => {
    dispatch(getSongFromMyFavorite(user._id));
  }, []);

  useEffect(() => {
    console.log(myFavorite);
  }, [myFavorite]);

  return (
    <View style={styles.container}>
      <MyHeader
        title={'Album của bạn'}
        canGoBack
        headerColor={rootColor.primaryColor}
        tintColor={rootColor.whiteColor}
      />
      {!user._id ? (
        <View style={styles.wraperCenter}>
          <Text style={styles.text}>Bạn cần đăng nhập để tạo album</Text>
          <PrimaryBtn
            title="Đăng nhập"
            callback={() => navigation.navigate('AuthStack')}
          />
        </View>
      ) : (
        myFavorite._id && (
          <View style={{flex: 1}}>
            <FlatList
              data={myFavorite.listSong}
              keyExtractor={item => item._id}
              renderItem={({item, index}) => (
                <SongItem
                  callbackAction={() => removeFromFavorite(item)}
                  action="delete"
                  song={item}
                  index={index}
                  handlePress={handlePress}
                />
              )}
            />
          </View>
        )
      )}
    </View>
  );
};

export default MyFavoriteScreen;
