import React, {useCallback, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import MasonryList from '../../components/MasonryList';
import styles from './styles';
import {headerH, spacing} from '../../constants/dimensions';
import BtnDrawer from '../../components/BtnDrawer';
import rootApi from '../../api';
import {useState} from 'react';
import {AlbumType} from '../../types';
import Loading from '../../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import rootColor from '../../constants/colors';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomAvatar from '../../components/CustomAvatar';
import {setIndex} from '../../redux/actions/indexDrawerAction';
import Avatar from '../../components/Avatar';
import {showAlertAction} from '../../redux/actions/alertActions';

const HomeScreen = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const isFocused = useIsFocused();
  const scrollY = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const translateY = scrollY.interpolate({
    inputRange: [0, headerH, headerH + 1],
    outputRange: [0, headerH, headerH],
  });
  const opacity = scrollY.interpolate({
    inputRange: [0, headerH / 2],
    outputRange: [1, 0],
  });
  const opacit2 = scrollY.interpolate({
    inputRange: [0, headerH / 2, headerH],
    outputRange: [0, 0.3, 1],
  });

  const getAlbumsData = async () => {
    const data = await rootApi.getAllAlbums();
    if (data) {
      setAlbums(data);
    }
  };

  useEffect(() => {
    getAlbumsData();

    // const backAction = () => {
    //   console.log(navigation, route);

    //   dispatch(
    //     showAlertAction({
    //       title: 'Thông báo',
    //       message: 'Bạn có muốn thoát ?',
    //       isConfirm: true,
    //       callbackConfirm: () => BackHandler.exitApp(),
    //     }),
    //   );
    //   return true;
    // };

    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   backAction,
    // );

    // return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (isFocused) {
      dispatch(setIndex(0));
    }
  }, [isFocused]);

  // useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', e => {
  //       // Prevent default behavior of leaving the screen
  //       e.preventDefault();

  //       // Prompt the user before leaving the screen
  //       dispatch(
  //         showAlertAction({
  //           title: 'Thông báo',
  //           message: 'Bạn có chắc muốn thoát ?',
  //           isConfirm: true,
  //           callbackConfirm: () => BackHandler.exitApp(),
  //         }),
  //       );
  //     }),
  //   [navigation],
  // );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        dispatch(
          showAlertAction({
            title: 'Thông báo',
            message: 'Bạn có chắc muốn thoát ?',
            isConfirm: true,
            callbackConfirm: () => BackHandler.exitApp(),
          }),
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <View style={{flex: 1}}>
      {albums.length > 0 ? (
        <>
          <Animated.View
            style={[
              styles.headerSecondary,
              {
                transform: [{translateY}],
                opacity: opacit2,
              },
            ]}>
            <BtnDrawer color="#fff" />
            {!user._id ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('AuthStack')}>
                <Text style={[styles.loginText, {color: rootColor.whiteColor}]}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('AccountStack')}>
                <Avatar
                  image={user.image}
                  name={user.displayName}
                  hideName
                  sizeImage={40}
                  isCircle
                />
              </TouchableOpacity>
            )}
          </Animated.View>
          <Animated.ScrollView
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: scrollY,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            style={{flex: 1, backgroundColor: '#fff', padding: spacing.normal}}>
            <Animated.View style={[styles.header, {opacity}]}>
              <View style={{flexDirection: 'row'}}>
                <BtnDrawer />
                <Text style={styles.heading}>Trang Chủ</Text>
              </View>
              {!user._id ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('AuthStack')}>
                  <Text style={styles.loginText}>Đăng nhập</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('AccountStack')}>
                  <Avatar
                    image={user.image}
                    name={user.displayName}
                    hideName
                    sizeImage={40}
                    isCircle
                  />
                </TouchableOpacity>
              )}
            </Animated.View>
            {albums && <MasonryList albums={albums} />}
          </Animated.ScrollView>
        </>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default HomeScreen;
