import React, {useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Masonry from 'react-native-masonry-layout';
import dimensions, {spacing} from '../constants/dimensions';
import {mockAlbums} from '../constants/mockdata';
import * as Animatable from 'react-native-animatable';
import MasonryItem from './MasonryItem';
import TouchableScale from 'react-native-touchable-scale';

const MasonryList = () => {
  const ref = useRef<Masonry>();
  useEffect(() => {
    if (ref?.current) {
      const items = mockAlbums.map((item, index) => {
        return {
          height:
            (dimensions.w / 2) * Math.max(0, Math.random()) + dimensions.w / 2,
          image: item.image,
          name: item.name,
          artist: item.artist ? item.artist : 'Nhiều ca sĩ',
          index,
        };
      });
      ref.current.addItems(items);
    }
  }, []);
  return (
    <Masonry
      ref={ref}
      columns={2}
      renderItem={item => (
        <TouchableScale
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
