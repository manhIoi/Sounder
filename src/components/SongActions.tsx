import React from 'react';
import {View, Text} from 'react-native';
import rootColor from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale';

const SongActions = ({
  type,
  callback,
}: {
  type: string;
  callback: () => void;
}) => {
  const render = () => {
    switch (type) {
      case 'delete':
        return (
          <Feather
            style={{backgroundColor: '#dc3545'}}
            color={rootColor.whiteColor}
            name="trash"
            size={20}
          />
        );
      case 'favorite':
        return <Feather color={rootColor.whiteColor} name="heart" size={20} />;
      case 'close':
        return <Feather color={rootColor.whiteColor} name="x" size={20} />;
      default:
        break;
    }
  };

  return (
    <TouchableScale
      onPress={callback}
      style={{
        height: '100%',
        aspectRatio: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          type === 'delete'
            ? '#dc3545'
            : type === 'favorite'
            ? rootColor.primaryColor
            : rootColor.secondaryColor,
      }}>
      {render()}
    </TouchableScale>
  );
};

export default SongActions;
