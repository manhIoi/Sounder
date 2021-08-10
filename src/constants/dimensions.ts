import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const dimensions = {
  w: Dimensions.get('screen').width,
  h: Dimensions.get('screen').height,
  statusbarH: Math.ceil(getStatusBarHeight()),
};

const spacing = {
  normal: 10,
};

export default dimensions;
export {spacing};
