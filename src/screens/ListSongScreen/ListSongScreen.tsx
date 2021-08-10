import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SongItem from '../../components/SongItem';
import rootColor from '../../constants/colors';
import dimensions, {spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';
import {mockListSongs} from '../../constants/mockdata';

import styles, {imgBannerH, imgBannerW} from './styles';

const ListSongScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scale = scrollY.interpolate({
    inputRange: [0, imgBannerH],
    outputRange: [1, 0],
  });

  const handlePress = () => {};

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
          source={{uri: 'https://i.ytimg.com/vi/SWZCrCKfSpY/maxresdefault.jpg'}}
          style={[
            styles.imgBanner,
            {
              transform: [
                {
                  scale: scale,
                },
              ],
              opacity: scale,
            },
          ]}
        />
      </View>
      <FlatList
        data={mockListSongs}
        style={styles.listSong}
        scrollEnabled={false}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => {
          return <SongItem song={item} />;
        }}
      />
    </Animated.ScrollView>
  );
};

export default ListSongScreen;
