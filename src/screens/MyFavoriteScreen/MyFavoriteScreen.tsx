import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AnimatedLottieView from 'lottie-react-native';
import React, {useRef, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyHeader from '../../components/MyHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import SongItem from '../../components/SongItem';
import rootColor from '../../constants/colors';
import {showAlertAction} from '../../redux/actions/alertActions';
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

  const removeFromFavorite = async (item: SongType) => {
    const res = await dispatch(removeSongFromMyFavorite(user._id, item._id));

    if (typeof res === 'string') {
      dispatch(showAlertAction({title: 'Lỗi', message: res}));
    } else {
      dispatch(showAlertAction({title: 'Xóa thành công'}));
    }
  };

  useEffect(() => {
    dispatch(getSongFromMyFavorite(user._id));
    return;
  }, [user._id]);

  useEffect(() => {
    dispatch(setIndex(1));
  }, [navigation]);

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
            {myFavorite.listSong.length > 0 ? (
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
            ) : (
              <AnimatedLottieView
                source={require('../../assets/empty.json')}
                autoPlay
                loop
                speed={0.7}
              />
            )}
          </View>
        )
      )}
    </View>
  );
};

export default MyFavoriteScreen;
