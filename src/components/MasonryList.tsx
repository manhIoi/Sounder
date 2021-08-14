import React, {useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Masonry from 'react-native-masonry-layout';
import dimensions, {spacing} from '../constants/dimensions';
import {mockAlbums} from '../constants/mockdata';
import * as Animatable from 'react-native-animatable';
import MasonryItem from './MasonryItem';
import TouchableScale from 'react-native-touchable-scale';
import {useNavigation} from '@react-navigation/native';
import {AlbumType, SongType} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';

const MasonryList = ({albums}: {albums: AlbumType[]}) => {
  const ref = useRef<Masonry>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    if (ref?.current) {
      const items = albums.map((item, index) => {
        return {
          height:
            (dimensions.w / 2) * Math.max(0, Math.random()) + dimensions.w / 2,
          image: item.image,
          name: item.name,
          artist: item.artist ? item.artist : 'Nhiều ca sĩ',
          index,
          album: item,
        };
      });
      ref.current.addItems(items);
    }
  }, [albums]);
  return (
    <Masonry
      ref={ref}
      columns={2}
      renderItem={(item: any) => (
        <TouchableScale
          onPress={() =>
            navigation.navigate('ListSongScreen', {album: item.album})
          }
          activeScale={0.95}
          style={[styles.containerItem, {height: item.height}]}>
          <View style={styles.overlay} />
          <MasonryItem
            title={item.name}
            image={item.image}
            artist={item.artist}
          />
        </TouchableScale>
      )}
    />
  );
};

const styles = StyleSheet.create({
  containerItem: {
    margin: spacing.normal / 2,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MasonryList;
