import React, {useEffect, useRef} from 'react';
import {View, Text, Image, ScrollView, Animated} from 'react-native';
import MasonryList from '../../components/MasonryList';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import dimensions, {headerH, spacing} from '../../constants/dimensions';
import BtnDrawer from '../../components/BtnDrawer';
import rootApi from '../../api';
import {useState} from 'react';
import {AlbumType} from '../../types';
import Loading from '../../components/Loading';

const HomeScreen = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const scrollY = useRef(new Animated.Value(0)).current;
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
  }, []);

  useEffect(() => {
    console.log(albums);
  }, [albums]);

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
              <BtnDrawer />
              <Text style={styles.heading}>Trang Chủ</Text>
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
