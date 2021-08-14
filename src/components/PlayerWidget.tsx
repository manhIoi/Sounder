import React from 'react';
import {View, Text, Image} from 'react-native';
import {spacing} from '../constants/dimensions';

const PlayerWidget = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'orange',
        height: 75,
        zIndex: 1000,
        flexDirection: 'row',
        borderTopColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: 'gray',
          zIndex: 50,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: '50%',
            height: '100%',
            backgroundColor: 'red',
          }}></View>
      </View>
      <Image
        style={{height: '100%', aspectRatio: 1}}
        source={{uri: 'https://i.ytimg.com/vi/ilKg0DZrOwY/maxresdefault.jpg'}}
      />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'tomato',
          marginLeft: spacing.normal,
        }}>
        <Text>Ai mang cô đơn đi</Text>
        <Text>K-ICM ft APJ</Text>
      </View>
    </View>
  );
};

export default PlayerWidget;
