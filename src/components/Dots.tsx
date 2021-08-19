import React from 'react';
import {Animated} from 'react-native';
import {View, Text} from 'react-native';
import rootColor from '../constants/colors';
import dimensions, {spacing} from '../constants/dimensions';

const c = 10;
const sp = 8;
const activeC = 15;
const moveY = (c + sp * 2 - activeC) / 2;

const Dots = ({
  acitveIndex,
  list,
  scrollX,
}: {
  acitveIndex: number;
  list: any[];
  scrollX: any;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {list.map((_, index) => (
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: rootColor.primaryColor,
            margin: sp,
          }}
        />
      ))}
      <Animated.View
        style={{
          width: activeC,
          height: activeC,
          borderRadius: activeC,
          borderWidth: 1,
          borderColor: rootColor.primaryColor,
          position: 'absolute',
          top: moveY,
          left: moveY,
          transform: [
            {
              translateX: scrollX.interpolate({
                inputRange: [-dimensions.w, 0, dimensions.w],
                outputRange: [-(sp * 2 + c), 0, sp * 2 + c],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Dots;
